// Step 2 of admin login: GitHub redirects back here with a code. We exchange
// it for an access token and hand it to the editor via postMessage.
// Runs as a Vercel serverless function at /api/callback.

function parseCookies(header = '') {
  return Object.fromEntries(
    header
      .split(';')
      .map((c) => c.trim().split('='))
      .filter((p) => p.length === 2)
      .map(([k, v]) => [k, decodeURIComponent(v)])
  );
}

function popupResponse(status, payload) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  return `<!doctype html><html><body><script>
  (function () {
    function receive(e) {
      window.opener.postMessage(${JSON.stringify(message)}, e.origin);
      window.removeEventListener('message', receive, false);
    }
    window.addEventListener('message', receive, false);
    window.opener.postMessage('authorizing:github', '*');
  })();
  </script><p>Completing login…</p></body></html>`;
}

export default async function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const { code, state } = req.query;

  const cookies = parseCookies(req.headers.cookie);
  if (!code || !state || state !== cookies.decap_oauth_state) {
    res
      .status(400)
      .setHeader('Content-Type', 'text/html')
      .send(popupResponse('error', { error: 'Invalid or expired login attempt. Please try again.' }));
    return;
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': 'janhit-watch-cms',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    const data = await tokenRes.json();

    res.setHeader('Content-Type', 'text/html');
    if (data.error || !data.access_token) {
      res.status(200).send(
        popupResponse('error', { error: data.error_description || 'Could not get a token from GitHub.' })
      );
      return;
    }
    res.status(200).send(popupResponse('success', { token: data.access_token, provider: 'github' }));
  } catch (e) {
    res
      .status(200)
      .setHeader('Content-Type', 'text/html')
      .send(popupResponse('error', { error: 'Token exchange failed.' }));
  }
}

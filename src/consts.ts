// Central place for site-wide settings. Edit these freely.

export const SITE = {
  // The public name of your site/brand.
  name: 'Janhit Watch',
  // A short tagline shown in the header and meta tags.
  tagline: 'Documented accountability journalism on Indian public figures',
  // Longer description used for SEO and the homepage.
  description:
    'Janhit Watch publishes carefully sourced, public-record-based reports on allegations, investigations and court cases involving politicians and public figures in India. Every claim is linked to its source.',
  // Used to build absolute URLs in RSS/SEO. Must match astro.config.mjs `site`.
  url: 'https://example.com',
  // Default author byline.
  author: 'Editorial Team',
  // Language for the <html lang> attribute.
  lang: 'en-IN',
};

// Links shown in the navigation bar.
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/topics', label: 'Topics' },
  { href: '/guides', label: 'Guides' },
  { href: '/search', label: 'Search' },
  { href: '/about', label: 'About' },
  { href: '/support', label: 'Support' },
];

// Secondary links shown only in the footer.
export const FOOTER_LINKS = [
  { href: '/methodology', label: 'How We Verify' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/contact', label: 'Contact' },
  { href: '/rss.xml', label: 'RSS' },
];

// Reader support / membership links. Leave blank to hide a button.
export const SUPPORT = {
  // e.g. 'https://www.buymeacoffee.com/yourname'
  buyMeACoffee: '',
  // e.g. 'https://www.patreon.com/yourname'
  patreon: '',
  // e.g. a UPI id like 'yourname@okhdfcbank' (shown as text for Indian readers)
  upi: '',
};

// Newsletter signup. Paste the form endpoint from your email provider
// (Buttondown, MailerLite, Formspree, ConvertKit, etc.). Leave blank to hide.
// The form does a normal POST with an `email` field, which all of the above
// support. See README for 2-minute setup.
export const NEWSLETTER = {
  enabled: false,
  action: '', // e.g. 'https://buttondown.com/api/emails/embed-subscribe/yourname'
  emailField: 'email',
};

// Google AdSense publisher id, e.g. 'ca-pub-1234567890123456'.
// Leave blank until your AdSense account is approved; ads stay hidden.
export const ADSENSE_CLIENT = '';

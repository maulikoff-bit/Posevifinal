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
  { href: '/about', label: 'About' },
  { href: '/methodology', label: 'How We Verify' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/contact', label: 'Contact' },
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

// Google AdSense publisher id, e.g. 'ca-pub-1234567890123456'.
// Leave blank until your AdSense account is approved; ads stay hidden.
export const ADSENSE_CLIENT = '';

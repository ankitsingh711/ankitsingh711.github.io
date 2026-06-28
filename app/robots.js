export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://ankoder.vercel.app/sitemap.xml',
  };
}

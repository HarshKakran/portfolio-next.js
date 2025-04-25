/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://harshkakran.netlify.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/server-sider-props/*'],
  // Optional: Add robots.txt transform
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/tmp/', '/drafts/']
      }
    ]
  }
};
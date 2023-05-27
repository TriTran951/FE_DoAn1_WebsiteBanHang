//siteMap
function SiteMap() {
    const urls = [
        'https://techhubtnb.netlify.app/dien-thoai',
        'https://techhubtnb.netlify.app/lap-top',
        'https://techhubtnb.netlify.app/tab-let',
        'https://techhubtnb.netlify.app/dong-ho',
        'https://techhubtnb.netlify.app/tai-nghe',
    ];
    const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
          .map(
              (url) => `
        <url>
          <loc>${url}</loc>
        </url>
      `,
          )
          .join('')}
    </urlset>
  `;
    return xml;
}
export default SiteMap;

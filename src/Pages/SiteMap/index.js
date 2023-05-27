const urls = [
    'https://techhubtnb.netlify.app/dien-thoai',
    'https://techhubtnb.netlify.app/lap-top',
    'https://techhubtnb.netlify.app/tab-let',
    'https://techhubtnb.netlify.app/dong-ho',
    'https://techhubtnb.netlify.app/tai-nghe',
];

const createSitemap = (urls) => {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpenTag = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetCloseTag = '</urlset>';
    const urlTags = urls.map((url) => `<url><loc>${url}</loc></url>`);

    const sitemapContent = [xmlHeader, urlsetOpenTag, ...urlTags, urlsetCloseTag].join('');

    return sitemapContent;
};

const sitemap = createSitemap(urls);
console.log(sitemap);
export default sitemap;

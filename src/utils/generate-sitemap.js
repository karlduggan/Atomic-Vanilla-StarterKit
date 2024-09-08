const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://thewheelchairots.co.uk/' });

sitemap.write({ url: '/', changefreq: 'weekly', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/faqs', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/services', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/wheelchair-assessments', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/residentialandnursinghomes', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/wheelchairrentalandweighing', changefreq: 'monthly', priority: 0.8 });

sitemap.end();

streamToPromise(sitemap).then((data) =>
  createWriteStream('./dist/sitemap.xml').write(data)
);

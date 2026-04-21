import { Helmet } from 'react-helmet-async';
import { seoData } from './seo.config';

function SeoHead({ page }) {
  const seo = seoData[page];
  if (!seo) return null;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={seo.robots} />
      <link rel="canonical" href={seo.canonical} />

      <meta property="og:type" content={seo.og.type} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:title" content={seo.og.title} />
      <meta property="og:description" content={seo.og.description} />
      {seo.og.image && <meta property="og:image" content={seo.og.image} />}
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content="eTiskarna" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.og.title} />
      <meta name="twitter:description" content={seo.og.description} />
      {seo.og.image && <meta name="twitter:image" content={seo.og.image} />}
    </Helmet>
  );
}

export default SeoHead;

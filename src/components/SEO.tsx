import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
  noFollow?: boolean;
}

/**
 * SEO Component - Manages all SEO-related meta tags dynamically
 * Usage: Import and use in page components to set page-specific SEO
 */
export const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = 'https://gooogle.wtf/og-image.png',
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage = 'https://gooogle.wtf/og-image.png',
  canonicalUrl,
  jsonLd,
  noIndex = false,
  noFollow = false,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    if (ogUrl) updateMetaTag('og:url', ogUrl, true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', twitterTitle || title);
    updateMetaTag('twitter:description', twitterDescription || description);
    updateMetaTag('twitter:image', twitterImage);

    // Update robots meta
    const robotsContent = `${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`;
    updateMetaTag('robots', robotsContent);

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    // Add JSON-LD structured data
    if (jsonLd) {
      const scripts = document.querySelectorAll('script[data-seo="true"]');
      scripts.forEach(script => script.remove());

      const addJsonLd = (data: Record<string, unknown>) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo', 'true');
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      };

      if (Array.isArray(jsonLd)) {
        jsonLd.forEach(addJsonLd);
      } else {
        addJsonLd(jsonLd);
      }
    }

    // Cleanup on unmount
    return () => {
      const seoScripts = document.querySelectorAll('script[data-seo="true"]');
      seoScripts.forEach(script => script.remove());
    };
  }, [
    title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, ogType,
    twitterCard, twitterTitle, twitterDescription, twitterImage, canonicalUrl, jsonLd,
    noIndex, noFollow
  ]);

  return null;
};

/**
 * Default SEO keywords for Gooogle.wtf
 */
export const defaultKeywords = 'opposite of google, anti google, google parody, satirical search engine, privacy search engine parody, gooogle vs google, search engine that shows opposite results, google alternative parody, anti-google search, opposite search results';

/**
 * Generate WebSite schema JSON-LD
 */
export const generateWebSiteSchema = (searchUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Gooogle.wtf',
  alternateName: 'Gooogle - The Opposite of Google',
  url: 'https://gooogle.wtf/',
  description: 'The search engine that gives you exactly the opposite of what you\'re looking for.',
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${searchUrl}?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
});

/**
 * Generate Organization schema JSON-LD
 */
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gooogle.wtf',
  url: 'https://gooogle.wtf/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://gooogle.wtf/favicon.ico',
    width: 64,
    height: 64
  },
  sameAs: ['https://twitter.com/goooglewtf'],
  description: 'A satirical search engine that gives you the opposite of what you\'re looking for.'
});

/**
 * Generate WebPage schema JSON-LD
 */
export const generateWebPageSchema = (title: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description: description,
  url: url,
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Gooogle.wtf',
    url: 'https://gooogle.wtf/'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Gooogle.wtf',
    url: 'https://gooogle.wtf/'
  }
});

/**
 * Generate Product schema JSON-LD for store items
 */
export const generateProductSchema = (
  name: string,
  description: string,
  price: number,
  image: string,
  sku?: string,
  category?: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: name,
  description: description,
  image: image,
  ...(sku && { sku: sku }),
  ...(category && { category: category }),
  brand: {
    '@type': 'Brand',
    name: 'Gooogle.wtf'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://gooogle.wtf/store',
    priceCurrency: 'USD',
    price: price.toString(),
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'Gooogle.wtf Store'
    },
    paymentAccepted: 'Bitcoin, Ethereum, Solana',
    priceValidUntil: '2025-12-31'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '42'
  }
});

/**
 * Generate Article schema JSON-LD for email/blog content
 */
export const generateArticleSchema = (
  headline: string,
  description: string,
  author: string,
  datePublished: string,
  image: string = 'https://gooogle.wtf/og-image.png'
) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: headline,
  description: description,
  image: image,
  author: {
    '@type': 'Person',
    name: author
  },
  publisher: {
    '@type': 'Organization',
    name: 'Gooogle.wtf',
    logo: {
      '@type': 'ImageObject',
      url: 'https://gooogle.wtf/favicon.ico'
    }
  },
  datePublished: datePublished,
  dateModified: datePublished,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://gooogle.wtf/mail'
  }
});

export default SEO;

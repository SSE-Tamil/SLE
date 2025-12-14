import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, name, type }) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />

            {/* Facebook tags */}
            <meta property='og:type' content={type} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />

            {/* Twitter tags */}
            <meta name='twitter:creator' content={name} />
            <meta name='twitter:card' content={type} />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": name,
                    "url": "https://srilaksmieng.web.app/",
                    "logo": "https://srilaksmieng.web.app/favicon.png",
                    "description": description,
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Plot No. 42, Ambattur Industrial Estate",
                        "addressLocality": "Chennai",
                        "addressRegion": "Tamil Nadu",
                        "postalCode": "600058",
                        "addressCountry": "IN"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-98765-43210",
                        "contactType": "customer service"
                    }
                })}
            </script>
        </Helmet>
    );
};

SEO.defaultProps = {
    title: 'Sri Lakshmi Engineering | Industrial Excellence',
    description: 'Sri Lakshmi Engineering - 40 Years of Industrial Engineering Excellence. Manufacturers of high-quality industrial components.',
    keywords: 'engineering, industrial, manufacturing, components, sri lakshmi engineering, coimbatore',
    name: 'Sri Lakshmi Engineering',
    type: 'website'
};

export default SEO;

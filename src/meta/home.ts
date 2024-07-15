

export const addSiteJsonLd = {
    "@context": "http://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://rahatbekhun.ir/#organization",
            "name": "وبسایت آموزشی راحت بخون",
            "url": "https://rahatbekhun.ir/",
            "sameAs": [
                "https://x.com/rahatbekhun",
                "https://www.linkedin.com/in/mernfa",
                "https://www.instagram.com/rahatbekhun",
                "https://www.eitaa.com/rahatbekhun",
                "https://www.t.me/rahatbekhun",
            ],
            "logo": {
                "@type": "ImageObject",
                "@id": "https://rahatbekhun.ir/#logo",
                "url": "https://rahatbekhun.ir/logo.png",
                "width": 350,
                "height": 350,
                "caption": "راحت بخون"
            }
        }
    ]
}
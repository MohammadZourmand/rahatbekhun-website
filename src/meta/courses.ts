

export const worksheetsbreadCrumbsJson = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement":
        [
            {
                "@type": "ListItem",
                "position": 1,
                "item":
                    {
                        "@id": "https://rahatbekhun.ir",
                        "name": "خانه"
                    }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item":
                    {
                        "@id": "https://rahatbekhun.ir/worksheets",
                        "name": "کاربرگ ها"
                    }
            }
        ]
}

export const singleWorksheetbreadCrumbsJson = (name : string, id : string | number) => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement":
        [
            {
                "@type": "ListItem",
                "position": 1,
                "item":
                    {
                        "@id": "https://rahatbekhun.ir",
                        "name": "خانه"
                    }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item":
                    {
                        "@id": "https://rahatbekhun.ir/worksheets",
                        "name": "کاربرگ ها"
                    }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item":
                    {
                        "@id": `https://rahatbekhun.ir/worksheets/${id}`,
                        "name": name
                    }
            }
        ]
    }
}

export const worksheetJsonLd = (data) => {
    return {
        
            "@context": "https://schema.org",
            "@type": "Product",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": data?._rating,
                "reviewCount": "10"
            },
            "name": data?.name,
            "description": `${data?.info}${data._grade}${data?._subject}`,
            "image": data?.image,
            "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": data?.price,
                "priceCurrency": "IRR"
            }
    }
}


export const instructorBreadCrumbsJson = {
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
                    "@id": "https://rahatbekhun.ir/instructor",
                    "name": "سازنده وبسایت"
                }
        }
    ]
}

export const personJson = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "محمد زورمند",
    "disambiguatingDescription": "یک آموزگار برنامه نویس با علاقه به بازی درمانی",
    "hasOccupation": {
        "@type": "Occupation",
        "name": "آموزگار",
        "educationRequirements": "لیسانس آموزش ابتدایی ( علوم تربیتی )"
    },
    "image": "https://rahatbekhun.ir/mohammad-zourmand.webp",
    "jobTitle": "teacher",
    "url": "https://rahatbekhun.ir/instructor"
}
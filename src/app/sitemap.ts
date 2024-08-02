
export default async function sitemap() {
    
    let data;

    try {
        const res = await fetch('http://api.rahatbekhun.ir/admin/worksheets/list?page=1&per_page=10')
        const worksheetsData = await res.json()
        data = worksheetsData?.data
    } catch (error) {
        data = []
        console.log(error)
    }

    const worksheetsUrl = data.map((item) => {
        return {
            url : `${process.env.SITE_WEB_URL}/worksheets/${item?._id}`,
            lastModified : new Date(),
            changeFrequency : 'monthly',
            priority : 1
        }
    })

    return [
        {
            url : `${process.env.SITE_WEB_URL}/about`,
            lastModified : new Date(),
            changeFrequency : 'monthly',
            priority : 1
        },
        {
            url : `${process.env.SITE_WEB_URL}/contact`,
            lastModified : new Date(),
            changeFrequency : 'monthly',
            priority : 1
        },
        {
            url : `${process.env.SITE_WEB_URL}/instructor`,
            lastModified : new Date(),
            changeFrequency : 'monthly',
            priority : 1
        },
        {
            url : `${process.env.SITE_WEB_URL}/search`,
            lastModified : new Date(),
            changeFrequency : 'monthly',
            priority : 1
        },
        {
            url : `${process.env.SITE_WEB_URL}/sign-in`,
            lastModified : new Date(),
            changeFrequency : 'monthly',
            priority : 1
        },
        {
            url : `${process.env.SITE_WEB_URL}/sign-up`,
            lastModified : new Date(),
            changeFrequency : 'monthly',
            priority : 1
        },
        {
            url : `${process.env.SITE_WEB_URL}/worksheets`,
            lastModified : new Date(),
            changeFrequency : 'monthly',
            priority : 1
        },
        ...worksheetsUrl
    ]
}

export default async function sitemap() {
    
    const res = await fetch('http://localhost:5000/admin/worksheets/list?page=1&per_page=10')
    const { data } = await res.json()

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
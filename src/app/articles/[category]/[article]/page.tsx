import SingleArticle from "@/components/articles/singleArticle"
import apiHelper from "@/utils/axios";

const SingleArticlePage = async (props) => {

    let data;

    try {
        const res = await apiHelper()
            .post(`http://localhost:5000/admin/posts/single?id=${props?.params.article}`)
        
        data = res?.data?.post

    } catch (err) {
        // ErrorToast('در دریافت اطلاعات مشکل داریم !')
        // redirect('/not-found')
        data = { data : []}
        console.log(err)
        console.log('Lost !')
    }
    return (
        <>
            {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(singleWorksheetbreadCrumbsJson(data?.data?.name,props?.params?.worksheet))
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(worksheetJsonLd(data?.data))
                }}
            /> */}
            <SingleArticle data={data} />
        </>
    )
}

export default SingleArticlePage;
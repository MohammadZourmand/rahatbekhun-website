import Articles from "@/components/articles";
import SingleArticle from "@/components/articles/singleArticle"
import apiHelper from "@/utils/axios";
import { ErrorToast } from "@/utils/swal";

const ArticlesSortPage = async (props) => {

    let data;

    try {
        const res = await apiHelper()
            .post(`http://localhost:5000/admin/posts?category=${props?.params.category}`)
        data = res?.data?.posts
        console.log('Successful !')
        console.log(res)
    } catch (err) {
        // ErrorToast('در دریافت اطلاعات مشکل داریم !')
        // redirect('/not-found')
        data = { data : []}
        console.log('Failed !')
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
            <Articles data={data} />
        </>
    )
}

export default ArticlesSortPage;
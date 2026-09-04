import SingleArticle from "@/components/articles/singleArticle";
import apiHelper from "@/utils/apiHelper";

const SingleArticlePage = async (props) => {
  let data;

  try {
    const res = await apiHelper(
      `/admin/posts/single?id=${props?.params.article}`,
      {
        method: "POST",
      },
    );

    await res.json()
  } catch (err) {
    // ErrorToast('در دریافت اطلاعات مشکل داریم !')
    // redirect('/not-found')
    data = { data: [] };
    console.log(err);
    console.log("Lost !");
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
  );
};

export default SingleArticlePage;

import Articles from "@/features/blog/components";
import SingleArticle from "@/features/blog/components/singleArticle";
import apiHelper from "@/utils/apiHelper";
import { ErrorToast } from "@/utils/swal";

const ArticlesSortPage = async (props) => {
  let data;

  try {
    const res = await apiHelper(
      `/admin/posts?category=${props?.params.category}`,
      {
        method: "POST",
      },
    );
    console.log("Successful !");
    console.log(res);
  } catch (err) {
    // ErrorToast('در دریافت اطلاعات مشکل داریم !')
    // redirect('/not-found')
    data = { data: [] };
    console.log("Failed !");
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
  );
};

export default ArticlesSortPage;

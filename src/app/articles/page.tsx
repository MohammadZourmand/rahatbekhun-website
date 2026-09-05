import Articles from "@/features/blog/components";
import apiHelper from "@/utils/apiHelper";

const ArticlesPage = async (props) => {
  let data;

  try {
    const res = await apiHelper("/admin/posts", {
      method: "POST",
    });

    const responseData = await res.json();
    data = responseData?.posts;
    // SuccessToast('اطلاعات با موفقیت دریافت شد !')
    console.log("I got data successfully !");
  } catch (err) {
    // ErrorToast('در دریافت اطلاعات مشکل داریم !')
    console.log("I have some problems in getting data !");
    console.log(err);
    data = [];
  }

  console.log(data);

  return <Articles data={data} />;
};

export default ArticlesPage;

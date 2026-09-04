import Blog from "@/components/blog";
import apiHelper from "@/utils/apiHelper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "وبلاگ راحت بخون",
  description:
    "مطالب آموزشی برای پایه های اول تا ششم ابتدایی با مطالعه تمامی دروس این پایه ها برای افزایش آگاهی والدین ، دانش آموزان و آموزگاران",
  keywords: [""],
  alternates: {
    canonical: "https://rahatbekhun.com/blog",
  },
};

const BlogPage = async (props) => {
  let data;

  try {
    const res = await apiHelper("/admin/posts", {
      method: "POST",
    });

    data = await res.json();
  } catch (err) {
    console.log("I have some problems in getting blog data !");
    console.log(err);
    data = { data: [] };
  }

  console.log(data);

  return <Blog />;
};

export default BlogPage;

import Blog from "@/components/blog";
import apiHelper from "@/utils/axios";
import { ErrorToast } from "@/utils/swal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'وبلاگ راحت بخون',
    description: 'مطالب آموزشی برای پایه های اول تا ششم ابتدایی با مطالعه تمامی دروس این پایه ها برای افزایش آگاهی والدین ، دانش آموزان و آموزگاران',
    keywords : [''],
    alternates : {
        canonical : 'https://rahatbekhun.com/blog'
    }
}

const BlogPage = async (props) => {

    let data;

    try {
        const res = await apiHelper().post(`http://localhost:5000/admin/posts`)
        data = res?.data

    } catch (err) {
        ErrorToast('در دریافت اطلاعات مشکل داریم !')
        // redirect('/not-found')
        data = { data : []}
    }

    console.log(data)

    return (
        <Blog />
    )
}

export default BlogPage;
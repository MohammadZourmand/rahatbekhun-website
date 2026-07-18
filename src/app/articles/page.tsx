

import Articles from "@/components/articles";
import apiHelper from "@/utils/axios";
import { ErrorToast, SuccessToast } from "@/utils/swal";

const ArticlesPage = async (props) => {

    let data;

    try {
        const res = await apiHelper().post(`/admin/posts`)
        data = res?.data?.posts
        // SuccessToast('اطلاعات با موفقیت دریافت شد !')
        console.log('I got data successfully !')

    } catch (err) {
        // ErrorToast('در دریافت اطلاعات مشکل داریم !')
        console.log('I have some problems in getting data !')
        console.log(err)
        data = { data : []}
    }

    console.log(data)

    return (
        <Articles data={data} />
    )
}

export default ArticlesPage;
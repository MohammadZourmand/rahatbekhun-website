import apiHelper from "@/utils/axios"
import { ErrorToast } from "@/utils/swal"

export const getWorksheets = async (url) => {

    try {
        const res = await apiHelper().get(url)
        console.log(res)
        return res?.data

    } catch (err) {
        ErrorToast('مشکلی در دریافت اطلاعات به وجود آمده است !')
        return {data : []}
    }
}
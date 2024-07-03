import apiHelper from "@/utils/axios"

export const getWorksheets = async (url) => {

    try {
        const res = await apiHelper().get(url)
        // SuccessToast({ message : res?.data?.message})
        console.log(res)
        return res?.data

    } catch (err) {
        // WrongToast({ message : 'مشکلی در دریافت اطلاعات به وجود آمده است !'})
        return {data : []}
    }
}
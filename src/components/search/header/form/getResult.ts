import apiHelper from "@/utils/axios"


export const getSearchResult = async (url : string) => {
    try {
        const res = await apiHelper().get(url)
        return res?.data
    } catch (err) {
        console.log(err)
        return {data : [], totalPages : 0}
    }
}
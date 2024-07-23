import GradePage from "@/components/worksheets/gradePage";
import apiHelper from "@/utils/axios";
import { WarningToast } from "@/utils/swal";


const gradeFixer = (grade) => {
    switch (grade) {
        case "grade-1":
            return 'اول'
        case "grade-2":
            return 'دوم'
        case "grade-3":
            return 'سوم'
        case "grade-4":
            return 'چهارم'
        case "grade-5":
            return 'پنجم'
        case "grade-6":
            return 'ششم'
        case "grade-7":
            return 'آمادگی برای هفتم'
        default:
            return 'پیش دبستانی'
    }
}

const getData = async (grade) => {
    try {
        const res =  await apiHelper().get(`http://localhost:5000/admin/worksheets/list?_grade=${grade}`)
        return res?.data?.data
    } catch (err) {
        WarningToast('مشکلی در دریافت اطلاعات وجود دارد !')
        console.log("err")
        return []
    }
}

export default async function WorksheetsGrades({params}) {

    const grade = gradeFixer(params?.grade) || "دوم"

    const data = await getData(grade) || []

    return (
        <>
            <GradePage data={data} params={params} grade={grade} />
        </>
    )
}
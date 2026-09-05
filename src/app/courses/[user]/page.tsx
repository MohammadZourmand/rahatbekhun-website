import GradePage from "@/features/worksheets/components/gradePage";

const gradeFixer = (grade) => {
    switch (grade) {
        case "pre-school":
            return 'پیش دبستانی'
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
            return 'هفتم'
        default:
            return 'برای آموزگاران'
    }
}

export default async function WorksheetsGrades({params}) {

    const grade = gradeFixer(params?.grade) || "دوم"

    return (
        <>
            <GradePage params={params} grade={grade} />
        </>
    )
}
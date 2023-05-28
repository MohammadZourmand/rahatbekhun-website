import SingleCourse from "@/components/singleCourse";
import { NextPage } from "next";
import { useRouter } from "next/router";


const SingleCoursePage : NextPage = () => {

    const router = useRouter()
    console.log(router.query)

    return (
        <SingleCourse />
    )
}

export const getServerSideProps = async () => {
    return {
        props : {
            
        }
    }
}

export default SingleCoursePage;
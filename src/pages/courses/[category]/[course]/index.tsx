import SingleCourse from "@/components/courses/singleCourse";
import { AppDispatch } from "@/store";
import { addQuery } from "@/store/slices/singleArticle";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const SingleCoursePage : NextPage = () => {

    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(addQuery(router.query))
    }, [dispatch, router.query])

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
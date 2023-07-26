import SingleVideo from "@/components/videos/singleVideo";
import { AppDispatch } from "@/store";
import { addQuery } from "@/store/slices/singleArticle";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const SingleVideoPage : NextPage = () => {

    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(addQuery(router.query))
    }, [])

    return (
        <SingleVideo />
    )
}

export const getServerSideProps = async () => {
    return {
        props : {
            
        }
    }
}

export default SingleVideoPage;
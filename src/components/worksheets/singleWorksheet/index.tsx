import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import Main from "./main"
import { worksheetsDataProps } from "../data";
import Breadcrumb from "@/components/global/elements/boxes/breadcrumb";


const SingleWorksheet = ({data} : {data : worksheetsDataProps}) => {

    return (
        <>
            <Navbar isWhite={false}/>
            <Breadcrumb
                isWhite={false}
                cls="mx-16"
                itemCls="!text-gray-400 font-semibold"
                items={[
                    {href : "/worksheets", value : "کاربرگ ها"},
                    {href : `/worksheets?grade=${data?._grade}`, value : `پایه ${data?._grade}`},
                ]}
            />
            <Main data={data} />
            <Footer />
        </>
    )
}

export default SingleWorksheet;
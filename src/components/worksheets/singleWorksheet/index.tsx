import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import Main from "./main"
import { worksheetsDataProps } from "../data";
import Breadcrumb from "@/components/global/elements/boxes/breadcrumb";
import TabSwitcher from "./tabSwitcher";


const SingleWorksheet = ({data, params} : {data : worksheetsDataProps, params : any}) => {

    console.log(params)

    return (
        <>
            <Navbar isWhite={false}/>
            <Breadcrumb
                isWhite={false}
                cls="mx-16 lg:block hidden"
                itemCls="!text-gray-400 font-semibold"
                items={[
                    {href : "/worksheets", value : "کاربرگ ها"},
                    {href : `/worksheets/${params.grade}`, value : `پایه ${data?._grade}`},
                ]}
            />
            <Main data={data} />
            <TabSwitcher data={data}/>
            <Footer />
        </>
    )
}

export default SingleWorksheet;
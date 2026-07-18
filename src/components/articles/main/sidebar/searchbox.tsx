import { SearchTwoColorIcon } from "@/assets/icons";
import Input from "@/components/global/elements/inputs/input";
import MyLabel from "@/components/global/elements/inputs/label";

interface SearchboxProps {
    cls ?: string
}

const Searchbox = ({cls} : SearchboxProps ) => {

    const submitHandler = (values) => {
        console.log(values)
    }

    return (
        <div></div>
        // <Formik
        //     initialValues={{search : ""}}
        //     onSubmit={submitHandler}
        // >
        //     <Form>
        //         <div className="relative">
        //             <Input
        //                 fieldCls="!py-4 focus:bg-gray-100"
        //                 placeholder={"دنبال چی هستی ؟"}
        //                 name={"search"} 
        //             />
        //             <button type="submit" className="absolute top-[.85rem] left-4">
        //                 <SearchTwoColorIcon cls="w-6 h-6" />
        //             </button>
        //         </div>
        //     </Form>
        // </Formik>
    )
}

export default Searchbox;
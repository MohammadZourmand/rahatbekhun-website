import Input from "../../../form/inputs/input";
import BlueBtn from "../../../form/buttons/blue";
import FiveStars from "../stars/fiveStars";
import FaSpan from "../../../../utils/faSpan";

const InsertCommentCoursePart = () => {

    const initialValues = {
        name : '',
        email : '',
        comment : '' 
    }

    const FormHandler = (props : any) => {
        return 
    }

    return (
        <div></div>
        // <Formik
        //     initialValues = {initialValues}
        //     onSubmit={FormHandler}
        // >
        //     <Form className="grid grid-cols-12 gap-6">
        //         <Input name="name" cls="sm:col-span-6 col-span-12" placeholder="نام زیبای خودتو وارد کن ..."/>
        //         <Input name="email" cls="sm:col-span-6 col-span-12" placeholder="ایمیل خودت رو وارد کن ..."/>
        //         <div className="flex items-center col-span-12">
        //             <FaSpan cls="text-gray-600" value={` نمره دوره : `} />
        //             <FiveStars cls="mr-8" />
        //         </div>
        //         <Input as={"textarea"} name="comment" fieldCls="" cls="col-span-12 h-36" placeholder="دیدگاهت رو اینجا وارد کن " />
        //         <BlueBtn cls="mx-0 md:justify-self-start w-full md:w-[unset] text-center mt-4 md:col-span-3 col-span-12 px-8" text="ارسال دیدگاه"/>
        //     </Form>
        // </Formik>
    )
}

export default InsertCommentCoursePart;
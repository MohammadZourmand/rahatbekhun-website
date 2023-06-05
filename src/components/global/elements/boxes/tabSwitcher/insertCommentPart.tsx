import { Form, Formik } from "formik";
import Input from "../../inputs/input";
import BlueBtn from "../../buttons/blue";
import FaSpan from "../cart/faSpan";
import FiveStars from "../fiveStars";

interface InsertCommentCoursePartProps {

}

const InsertCommentCoursePart : React.FC<InsertCommentCoursePartProps> = () => {

    const initialValues = {
        name : '',
        email : '',
        comment : '' 
    }

    const FormHandler = (props : any) => {
        return 
    }

    return (
        <Formik
            initialValues = {initialValues}
            onSubmit={FormHandler}
        >
            <Form className="grid grid-cols-12 gap-6">
                <Input name="name" cls="col-span-6" placeholder="نام زیبای خودتو وارد کن ..."/>
                <Input name="email" cls="col-span-6" placeholder="ایمیل خودت رو وارد کن ..."/>
                <div className="flex items-center col-span-12">
                    <FaSpan cls="text-gray-600" value={` نمره دوره : `} />
                    <FiveStars cls="mr-8" />
                </div>
                <Input as={"textarea"} name="comment" fieldCls="" cls="col-span-12 h-36" placeholder="دیدگاهت رو اینجا وارد کن " />
                <BlueBtn cls="mx-0 justify-self-start mt-4 col-span-3 px-8" text="ارسال دیدگاه"/>
            </Form>
        </Formik>
    )
}

export default InsertCommentCoursePart;
import { Form, Formik } from "formik";
import Input from "@/components/global/elements/inputs/input";
import FiveStars from "@/components/global/elements/boxes/stars/fiveStars";
import BlueBtn from "@/components/global/elements/buttons/blue";
import { courseDetails, episodeCommentsProps } from "@/components/global/elements/boxes/tabSwitcher/courseInfo";
import Link from "next/link";
import Heading5 from "@/components/global/elements/headings/h5";
import Paragraph from "@/components/global/elements/paragraph";
import Image from "next/image";
import FaSpan from "@/utils/faSpan";


interface CommentsPartProps {
    cls ?: string
}

const CommentsPart = ({cls} : CommentsPartProps) => {

    const initialValues = {
        name : '',
        email : '',
        comment : '' 
    }

    const FormHandler = (props : any) => {
        return 
    }

    return (
        <div className={cls}>
            <div className="col-span-3 space-y-4  bg-transparent">
                <FaSpan cls="text-xl text-gray-900 font-extrabold" value={`${courseDetails.comments.length} دیدگاه`} />
                <div className="space-y-3">
                    {
                        courseDetails.comments.map((comment : episodeCommentsProps) => {
                            return (
                                <Link href={comment.href} key={comment.id} className={`flex flex-col sm:px-8 sm:py-6 p-4 bg-gray-200/40`}>
                                    <header className={`flex xs:flex-row flex-col justify-between xs:items-center`}>
                                        <div className="flex items-center">
                                            <Image
                                                className="col-span-1 border-2 border-white w-16 h-16 rounded-full"
                                                width={64}
                                                height={64}
                                                alt={comment.username}
                                                src={comment.userPicture}
                                            />
                                            <div className="flex flex-col space-y-1 mr-4 text-sm">
                                                <span className="text-gray-800 font-bold">{comment.username}</span>
                                                <FaSpan cls="text-gray-600" value={comment.date} />
                                            </div>
                                        </div>
                                        <FiveStars cls="xs:mt-8 mt-4 self-start" />
                                    </header>
                                    <main>
                                        <Paragraph cls="xs:mt-6 mt-4 xs:mr-4 pb-4 text-gray-500 font-medium leading-loose" text={comment.text} />
                                    </main>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <Heading5 cls="text-gray-900 my-16" text="دیدگاه خود را به اشتراک بگذارید" />
            <Formik
                initialValues = {initialValues}
                onSubmit={FormHandler}
            >
                <Form className="grid grid-cols-12 gap-6">
                    <Input name="name" cls="sm:col-span-6 col-span-12" placeholder="نام زیبای خودتو وارد کن ..."/>
                    <Input name="email" cls="sm:col-span-6 col-span-12" placeholder="ایمیل خودت رو وارد کن ..."/>
                    <Input as={"textarea"} name="comment" fieldCls="" cls="col-span-12 h-36" placeholder="دیدگاهت رو اینجا وارد کن " />
                    <div className="flex items-center col-span-12">
                        <FaSpan cls="text-gray-600" value={` نمره دوره : `} />
                        <FiveStars cls="mr-8" />
                    </div>
                    <BlueBtn cls="mx-0 md:justify-self-start w-full md:w-[unset] text-center mt-4 md:col-span-3 col-span-12 px-8" text="ارسال دیدگاه"/>
                </Form>
            </Formik>
        </div>
    )
}

export default CommentsPart;
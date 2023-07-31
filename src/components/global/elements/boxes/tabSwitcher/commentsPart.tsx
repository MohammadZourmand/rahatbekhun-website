import { Star } from "@/assets/icons";
import Heading6 from "../../headings/h6";
import Paragraph from "../../paragraph";
import FaSpan from "@/components/global/elements/translators/faSpan";
import { courseDetails, episodeCommentsProps } from "./courseInfo";
import StaticProgressbar from "./staticProgress";
import Link from "next/link";
import Heading5 from "../../headings/h5";
import { Formik } from "formik";
import InsertCommentCoursePart from "./insertCommentPart";
import FiveStars from "../stars/fiveStars";

interface CommentsCoursePartsProps {

}

const CommentsCourseParts : React.FC<CommentsCoursePartsProps> = () => {
    return (
        <div>
            <header>
                <Heading6 text="نظرات"/>
                <Paragraph cls="pr-2 mt-8 text-gray-600 font-medium leading-[2.5]" text={"در این قسمت شما می توانید نظرات بقیه را مشاهده کنید و برای خرید یا مشاهده دوره بهتر تصمیم بگیرید. هم چنین اگر این دوره را قبلا مشاهده کرده اید نظر خود را برای بقیه به اشتراک بگذارید تا به کمک آن برای استفاده از این دوره بهتر تصمیم بگیرند."} />
            </header>
            <main className="mt-8 flex flex-col space-y-12">
                <div className="grid grid-cols-3 sm:gap-x-2 gap-y-2">
                    <div className="sm:col-span-1 col-span-3 sm:p-0 p-4 bg-gray-200/70 flex flex-col items-center justify-center">
                        <FaSpan cls="text-[5rem] text-gray-800 tracking-tight font-bold" value={courseDetails.score}/>
                        <div className="flex">
                        <FiveStars />
                        </div>
                        <FaSpan cls="mt-3 text-gray-500 font-semibold" value={`از ${courseDetails.comments.length} نمره`}/>
                    </div>  
                    <div className="sm:col-span-2 col-span-3 bg-gray-200/70 sm:p-8 p-4">
                        <Heading6 cls="text-gray-800 font-medium !text-base" text="ریز نمرات دوره"/>
                        <div className="mt-6">
                            {
                                [1,2,3,4,5].map((item : number) => {
                                    return (
                                        <div className="grid grid-cols-12 items-center justify-center py-2">
                                            <FaSpan cls="sm:col-span-2 col-span-3 text-gray-600" value={`${item} ستاره`} />
                                            <StaticProgressbar cls="sm:col-span-8 col-span-6" completed={1} all={5} />
                                            <FaSpan cls="sm:col-span-2 col-span-3 text-center text-gray-600" value={`${1/5*100} %`} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>  
                </div>
                <div className="col-span-3 space-y-4  bg-transparent">
                    <FaSpan cls="text-xl text-gray-900 font-extrabold" value={`${courseDetails.comments.length} دیدگاه`} />
                    <div className="space-y-3">
                        {
                            courseDetails.comments.map((comment : episodeCommentsProps) => {
                                return (
                                    <Link href={comment.href} key={comment.id} className={`flex flex-col sm:px-8 sm:py-6 p-4 bg-gray-200/40`}>
                                        <header className={`flex xs:flex-row flex-col justify-between xs:items-center`}>
                                            <div className="flex items-center">
                                                <img className="col-span-1 border-2 border-white w-16 h-16 rounded-full" src={comment.userPicture} alt="" />
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
            </main>
            <footer>
                <Heading5 cls="text-gray-900 my-16" text="دیدگاه خود را به اشتراک بگذارید" />
                <InsertCommentCoursePart />
            </footer>
        </div>
    )
}

export default CommentsCourseParts;
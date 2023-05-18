import BlueBtn from "@/components/global/elements/buttons/blue"
import DarkBlueBtn from "@/components/global/elements/buttons/darkBlue"
import TransparentBtn from "@/components/global/elements/buttons/opacity"
import Heading3 from "@/components/global/elements/headings/h3"
import Paragraph from "@/components/global/elements/paragraph"
import BlueParagraph from "@/components/global/elements/paragraph/blue"


const TeachersClasses : React.FC = () => {

    return (
        <section className="relative grid grid-cols-12 xl:my-44 my-16 xl:mx-64 md:mx-40 sm:mx-[30px] xs:mx-[10px] mx-6">
            <div className="xl:col-span-5 col-span-12 flex flex-col justify-center gap-y-3">
                <BlueParagraph cls="font-semibold !text-center xl:!text-right" text="راحت بخون دستیار آموزگاران" />
                <Heading3 cls="!leading-relaxed !text-center xl:!text-right text-gray-800" text="راحت بخون را همیار کلاس خود کن !" />
                <Paragraph cls="font-medium leading-loose !text-center xl:!text-right" text="راحت بخون با ارائه مطالب، آزمایشگاه ها، کلاس ها، و بازی ها و موارد مشابه دیگه به شما آموزگاران دست یاری میده تا تجربه ی آموزشی بهتری رو رقم بزنین !" />
                <div className="flex xs:flex-row flex-col justify-center items-center gap-8 mt-6">
                    <DarkBlueBtn href="/" text="برو بریم"/>
                    <TransparentBtn text={"مشاهده جزئیات"} href="/" />
                </div>
            </div>
            <div className="xl:col-span-7 col-span-12">
                <img className="translate-y-12" src="./images/home/teamwork.jpg" alt="raharbekhun-helps-teachers-with-assistants-class" />
            </div>
        </section>
    )
}

export default TeachersClasses
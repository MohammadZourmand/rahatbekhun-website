import Heading1 from "@/components/global/elements/headings/h1";
import Paragraph from "@/components/global/elements/paragraph";
import {convertEnToPe} from "persian-number"
const Goal = () => {

    return (
        <section className="grid grid-cols-12 gap-12 max-w-5xl mx-auto my-40">
            <div className="mb-12 col-span-6 self-end relative">
                <Heading1 
                    text="نمی توان با دوری درس خواند ؟"
                    cls="!text-xl mb-6"
                />
                <Paragraph
                    text={convertEnToPe("سوال 1401 که آموزگار ابتدایی شدم. زمستون که شد بیماری ها و آلودگی ها باعث تعطیلی شدن و رمق کلاس هام رو گرفتن ! اونجا بود که سمت فضای مجازی آمدم و شروع به تدریس کردم و همون جا فهمیدم که این مدل آموزش ارزش اینکه واسش زمان بزاری رو داره ! چون خیلی از بچه ها راحتتر می خوندن و راحتتر درک میکردن پس با خودم گفتم چرا یه راحت بخون برا این بچه ها نسازم ؟")}
                    cls="font-medium text-gray-500/80 text-[.84rem] !leading-loose mb-2 pl-2"
                />
            </div>
            <div className="col-span-6 relative">
                <Paragraph
                    text="شروع راحت بخون"
                    cls="absolute top-16 -right-32 rotate-90 font-medium"    
                />
                <img src="/images/about/girl-working-with-laptop-3.jpg" className="rounded-lg shadow-all-lg" alt="girl-choosing-right-way-to-go" />
            </div>
        </section>
    )
}

export default Goal;
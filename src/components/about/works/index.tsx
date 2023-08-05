import Heading1 from "@/components/global/elements/headings/h1";
import Paragraph from "@/components/global/elements/paragraph";
import {convertEnToPe} from "persian-number"

const Works = () => {

    return (
        <section className="grid grid-cols-12 gap-4 max-w-5xl mx-auto my-40">
            <div className="mb-12 col-span-12 self-end relative">
                <Heading1 
                    text="در راحت بخون چه چیزهایی وجود دارند ؟"
                    cls="!text-xl mb-6"
                    center={true}
                />
                <Paragraph
                    text={"راحت بخون تلاش میکنه تا بهترین نوع آموزش رو با استفاده از روش های خلاق و کودکانه به دانش آموزا یاد بده و بعد اونا رو وارد یک چرخه کنه طوری که سوال حل کنند آزمون بدن و مهم تر از همه از خوندن لذت ببرن ولی اینکار با کمک شما امکان پذیره اما چطور ؟ راحت بخون همیشه دنبال یه راه بهتر هست پس اگه اشتباهی دیدید یا جا برای پیشرفت دید حتما حتما حتمـــــــــــا به ما بگید ! چون ما که بهتر بشیم بچه ها بهتر میشن و بچه های بهتر یعنی ایـــــــــــــــــــران بهتر!"}
                    center={true}
                    cls="font-medium text-gray-500/80 text-[.84rem] !leading-loose mb-2 pl-2"
                />
            </div>
            <div className="col-span-12 relative mx-16">
                <Paragraph
                    text="پیشرفت راحت بخون در کنار شما"
                    cls="absolute top-28 -right-36 rotate-90 font-medium"    
                />
                <img src="/images/about/children-with-their-hands-up.jpg" className="rounded-lg shadow-all-lg" alt="girl-choosing-right-way-to-go" />
            </div>
        </section>
    )
}

export default Works;
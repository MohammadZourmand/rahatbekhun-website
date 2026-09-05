import OpaCart from "@/components/elements/cards/btnCart";
import Heading1 from "@/components/elements/headings/h1";
import Paragraph from "@/components/global/elements/paragraph";

const Contact = () => {

    return (
        <section className="grid grid-cols-12 gap-4 2xl:px-56 lg:px-24 mx-auto py-24 bg-gray-200/70">
            <div className="mb-12 col-span-12 self-end relative">
                <Heading1 
                    text="اگه قصد کمک داری به ما رو داری ما چشم به راهتیم !"
                    cls="!text-xl mb-6 !mt-0"
                    center={true}
                />
                <Paragraph
                    text={"اگه چیزی تو فکرت هست که فک میکنی مفیده با در میون بزار ! مطمئن باش که ما از ایده هات استقبال می کنیم!"}
                    center={true}
                    cls="font-medium text-gray-500/80 text-[.84rem] !leading-loose mb-2 pl-2"
                />
            </div>
            <div className="grid grid-cols-2 lg:gap-6 gap-4 col-span-12 relative lg:mx-4 xs:mx-16 mx-4">
                <OpaCart
                    text="میتونم آنلاین تدریس کنم"
                    btnText="همین الان ثبت نام کن"
                    cls="sm:col-span-1 col-span-2"
                    href="/contact"
                    src="/images/home/teacher-man-with-book.webp"
                    textCls="!text-lg"
                    btnCls="!text-xs"
                />
                <OpaCart
                    text="میتونم محتوا تولید کنم"
                    btnText="همین الان شروع کن"
                    cls="sm:col-span-1 col-span-2"
                    href="/contact"
                    src="/images/home/woman-making-beauty-vlog-with-her-professional-camera.webp"
                    textCls="!text-lg"
                    btnCls="!text-xs"
                />
            </div>
        </section>
    )
}

export default Contact;
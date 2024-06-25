import { ActivityIcon, ChartIcon } from "@/assets/icons";
import Card2 from "@/components/global/elements/cards/card2";
import SectionHeader from "@/components/global/elements/header/sectionHeader";
import IconBtn from "@/components/global/elements/buttons/iconBtn";
import { cardsInfo } from "../bestArticles/data";


const NewArticles = () => {

    return (
        <section>
           <SectionHeader
                icon1={<ActivityIcon cls="fill-[rgba(203,213,225,0.5)] absolute top-0 right-[34%] -z-[1] rotate-[45deg] scale-[3]" />}
                icon2={<ChartIcon cls="fill-[rgba(203,213,225,0.5)] absolute top-0 left-[34%] -z-[1] rotate-[5deg] scale-[2]"/>}
                smallText={"همیشه به روز و آپدیت هستی ؟"} 
                largeText={"اینجا آخرین نوشته ها رو خیلی سریع پیدا کن و اطلاعاتتو زیاد کن !"}
            />
            <main className="flex flex-col py-10 px-2 xs:px-5 md:px-24">
                <div className="grid grid-cols-12 md:gap-6 gap-y-6">
                {
                    cardsInfo.map((item, index) => {
                        return (
                            <Card2
                                key={index}
                                cls="lg:col-span-4 md:col-span-6 col-span-12"
                                item={item} 
                            />
                        )
                    })
                }
                </div>
                <IconBtn
                    text="مشاهده جدیدترین مقالات "
                    href="/articles"
                    iconName="left"
                    cls="col-span-4 mx-auto"
                />
            </main>
        </section>
    )
}

export default NewArticles;
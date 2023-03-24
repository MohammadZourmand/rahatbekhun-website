import SectionHeader from "@/components/global/elements/header/sectionHeader";
import { IconBook, IconBooks } from "@tabler/icons-react";
import { CartsInfo } from "./carts/cartsInfo";
import SingleCart, { SingleCartProps } from "./carts/singleCart";
import PinkBtn from "@/components/global/elements/buttons/pink";
import BlueBtn from "@/components/global/elements/buttons/blue";

interface LastestArticlesProps {

}

const LastestArticles : React.FC<LastestArticlesProps> = ({}) => {

    return (
        <section>
            <SectionHeader
                smallText="بروزترین مطالب وبسایت"
                largeText="آخرین مطالب منتشرشده توسط نویسندگان راحت بخون"
                icon1={<IconBook color="rgba(203,213,225,0.6)" className="absolute top-0 sm:left-[38%] left-[18%] -z-[1] rotate-[5deg] scale-[3]" stroke={2} />}
                icon2={<IconBooks color="rgba(203,213,225,0.5)" className="absolute top-0 sm:right-[38%] right-[18%] -z-[1] rotate-[35deg] scale-[2]" stroke={2} />}
            />
            <main className="grid grid-cols-12 gap-x-3 gap-y-6 mt-8 xl:mx-16 md:mx-6 mx-1">
                {
                    CartsInfo.map((item : SingleCartProps, index : number) => (
                        <SingleCart
                            key={index}
                            imgAlt={item.imgAlt}
                            imgSrc={item.imgSrc}
                            head={item.head}
                            para={item.para}
                            category={item.category}
                            date={item.date}
                            comments={item.comments} 
                            author={item.author}
                        />
                    ))
                }
            </main>
            <footer className="w-full flex items-center">
                <BlueBtn
                    text="مشاهده همه مقاله ها"
                />
            </footer>
        </section>
    )
}

export default LastestArticles;
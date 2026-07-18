import Slider from "./slider";


const SortSlider = ({}) => {

    return (
        <section className="mb-28">
            {/* <SectionHeader
                cls="mt-24"
                smallText="آیا دنبال موضوع خاصی هستی ؟"
                largeText="خیلی سریع و راحت از گزینه های پایین اونی رو که میخای انتخاب کن !"
                icon1={<IconCategory2 color="rgba(203,213,225,0.6)" className="absolute top-0 sm:left-[38%] left-[18%] -z-[1] rotate-[5deg] scale-[3]" stroke={2} />}
                icon2={<IconListDetails color="rgba(203,213,225,0.5)" className="absolute top-0 sm:right-[38%] right-[18%] -z-[1] rotate-[35deg] scale-[2]" stroke={2} />}
            /> */}
            <Slider cls="!mt-8" />
        </section>
    )
}

export default SortSlider;
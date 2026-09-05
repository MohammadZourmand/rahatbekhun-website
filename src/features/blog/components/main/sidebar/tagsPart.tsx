import TagBox from "@/components/elements/boxes/tag";
import Heading6 from "@/components/elements/headings/h6";


const mostViewedTags = ["بازی و ریاضی","نقاشی","طراحی","تدریس خلاقانه","تدریس دوطرفه","آزمایش","کوروش"]

const TagsPart = () => {

    return (
        <div className="lg:mt-12 mt-6">
            <Heading6 
                text="پرطرفدارترین تگ ها"
                cls="text-gray-800 px-1 py-4 border-b border-gray-200"
            />
            <main className="mt-12 flex flex-wrap gap-2">
                {
                    mostViewedTags.map((item, index) => (
                        <TagBox value={item} key={index} func={() => console.log(item)}/>
                    ))
                }
            </main>
        </div>
    )
}

export default TagsPart;
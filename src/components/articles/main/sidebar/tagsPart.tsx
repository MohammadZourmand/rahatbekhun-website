import TagBox from "@/components/global/elements/boxes/tag";
import Heading6 from "@/components/global/elements/headings/h6";

interface TagsPartProps {
    cls ?: string
}

const mostViewedTags = ["بازی و ریاضی","نقاشی","طراحی","تدریس خلاقانه","تدریس دوطرفه","آزمایش","کوروش"]

const TagsPart : React.FC<TagsPartProps> = () => {

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
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
                        <div onClick={() => console.log(item)} className="cursor-pointer hover:text-white font-medium hover:bg-baby-9 transition duration-500 px-3 py-2 bg-gray-100 text-gray-700 text-[.9rem] rounded" key={index}>
                            {item}
                        </div>
                    ))
                }
            </main>
        </div>
    )
}

export default TagsPart;
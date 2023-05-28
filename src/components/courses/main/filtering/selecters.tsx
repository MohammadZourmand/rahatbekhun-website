// ? Componenets & types ==
import Opener from "../../opener";
import MyRadio from "../../radioBox";
import RangeInput from "../../rangeInput";
import { CoursesFilteringTitlesProps } from "@/types/courses";

// ? assets ===============
import { CoursesFilteringTitles } from "../../data/selectboxOptions";

interface SelectersProps {

}

const Selecters : React.FC<SelectersProps> = () => {

    return (
        <>
            {
                CoursesFilteringTitles?.map((filter : CoursesFilteringTitlesProps) => {
                    if(filter?.id < 5 ) {
                        return (
                            <Opener
                                key={filter?.id}
                                head={filter?.title} 
                                main={
                                    <main className="space-y-3">
                                        <MyRadio options={filter?.items} />
                                    </main>
                                } 
                            />
                        )
                    } else if(filter.id === 5) {
                        return (
                            <Opener
                                key={filter?.id}
                                head={filter?.title}
                                main={
                                    CoursesFilteringTitles?.map((filter : CoursesFilteringTitlesProps) => {
                                        if(filter?.id < 9 && filter?.id > 5) {
                                            return (
                                                <Opener
                                                    key={filter?.id}
                                                    head={filter?.title} 
                                                    main={
                                                        <main className="space-y-3">
                                                            <MyRadio options={filter?.items} />
                                                        </main>
                                                    } 
                                                />
                                            )
                                        } else if(filter?.id === 9 ) {
                                            return (
                                                <Opener
                                                    key={filter?.id}
                                                    head={filter?.title} 
                                                    main={
                                                        <RangeInput />
                                                    } 
                                                />
                                            )
                                        }
                                    })
                                }
                            />
                        )
                    }
                })
            }
        </>
    )
}

export default Selecters;
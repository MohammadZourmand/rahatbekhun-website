// import ActiveLink from "@/components/global/activeLink";
import ActiveLink from "./activeLink";
import { menuOptions, menuOptionsListProps, menuOptionsProps } from "./options";


const Option = ({value} : {value : string} ) => {

    return (
        <>{
            menuOptions.map((item : menuOptionsProps) =>(
                    item.name === value
                        && ( item.list.map((item : menuOptionsListProps, index : number) => (
                            <ActiveLink key={index} href={item.href} className='group'>{
                                ({active}) => (
                                    <div className={`${active ? "bg-white text-gray-800" : "text-white"} flex items-center transition group-hover:-translate-x-2 group-hover:bg-gray-700 nozha py-2 pr-3 rounded`}>
                                        {item.title}
                                    </div>
                                )
                            }</ActiveLink>
                        )))
                )
            )
        }</>
    )
}

export default Option;
import ActiveLink from "./activeLink";
import { additionalOptions, additionalOptionsProps } from "./options";


const MoreOption = () => {

    return (
        <>{
            additionalOptions.map((item : additionalOptionsProps, index : number) => (
                <ActiveLink key={index} href={item.href} className='group'>
                    {
                        ({active}) => (
                            <div className={`flex items-center ${active ? "bg-white text-gray-800" : "text-white"} transition group-hover:-translate-x-2 group-hover:bg-gray-700 nozha py-2 pr-3 rounded`}>
                                <item.img cls={`${active ? "fill-gray-700" : "fill-white"} ml-3 mb-0.5 w-7 h-7`} />
                                {item.title}
                            </div> 
                        )
                    }
                </ActiveLink>
            ))
        }</>
    )
}

export default MoreOption;
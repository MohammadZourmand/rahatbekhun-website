import { EditBrokenIcon, PaperBrokenIcon, SettingsBrokenIcon, VideoBrokenIcon } from "@/assets/icons";
import { usePathname } from "next/navigation";



export default function MenuBtn({url, name, menuShower} : {url : string, name : string, menuShower : any}) {
    
    let link;
    const path = usePathname()


    switch (url) {
        case 'worksheets':
            link = <PaperBrokenIcon cls={`${path.includes('/worksheets') ? 'fill-sky-400' : 'fill-white'} w-8 h-8`}/>
            break;

        case 'courses':
            link = <VideoBrokenIcon cls={`${path.includes('/courses') ? 'fill-sky-400' : 'fill-white'} w-8 h-8`}/>
            break;
    
        case 'posts':
            link = <EditBrokenIcon cls={`${path.includes('/posts') ? 'fill-sky-400' : 'fill-white'} w-8 h-8`}/>
            break;

        default:
            link = <SettingsBrokenIcon cls={`fill-white w-8 h-8`}/>
            break;
    }
    
    return (
        <div className={`flex cursor-pointer flex-col items-center py-2 ${path.includes(`/${url}`) && 'border-b-2 border-sky-400'}`} onClick={() => menuShower(url)}>
            {link}
            <div className={`${path.includes(`/${url}`) ? 'text-sky-400' : 'text-white'} text-xs font-semibold mt-1`}>{name}</div>
        </div>
    )
}
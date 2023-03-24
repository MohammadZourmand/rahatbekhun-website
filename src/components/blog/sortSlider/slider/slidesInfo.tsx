import { ReactNode } from "react"
import { IconBallVolleyball, IconBaseline, IconBook, IconBrush, IconBuildingCastle, IconMathSymbols, IconDeviceDesktop, IconFlask, IconPuzzle, IconUsers, IconPray } from "@tabler/icons-react";

export interface SlidesInfoProps {
    text : string
    number : number
    icon : ReactNode
}


    
export const SlidesInfo : SlidesInfoProps[] = [
    {
        text : "ریاضی",
        number : 24,
        icon : <IconMathSymbols color="#1e293b" width={60} height={60} />
    },{
        text : "ورزش و سلامتی",
        number : 24,
        icon : <IconBallVolleyball color="#1e293b" width={60} height={60} />
    },{
        text : "آموزش زبان",
        number : 14,
        icon : <IconBaseline color="#1e293b" width={60} height={60} />
    },{
        text : "هنر",
        number : 19,
        icon : <IconBrush color="#1e293b" width={60} height={60} />
    },{
        text : "تاریخ و جغرافیا",
        number : 17,
        icon : <IconBuildingCastle color="#1e293b" width={60} height={60} />
    },{
        text : "تکنولوژی",
        number : 24,
        icon : <IconDeviceDesktop color="#1e293b" width={60} height={60} />
    },{
        text : "روابط اجتماعی",
        number : 28,
        icon : <IconUsers color="#1e293b" width={60} height={60} />
    },{
        text : "علوم و آزمایشگاه",
        number : 14,
        icon : <IconFlask color="#1e293b" width={60} height={60} />
    },{
        text : "دینی و مذهبی",
        number : 14,
        icon : <IconPray color="#1e293b" width={60} height={60} />
    },{
        text : "بازی",
        number : 37,
        icon : <IconPuzzle color="#1e293b" width={60} height={60} />
    },{
        text : "متفرقه",
        number : 11,
        icon : <IconBook color="#1e293b" width={60} height={60} />
    }
]
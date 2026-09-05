import { ActivityBroken, EditSquareBroken, GameBroken, UsersBroken } from "@/assets/icons"
import { ReactElement } from "react"


export interface DataProps {
    icon : ReactElement
    text : string
    circleColor : string
}

export const Data : DataProps[] = [
    {
        text : "متناسب با روند شما",
        icon : <ActivityBroken color="rgb(237 7 139)" cls="absolute -top-2 -right-2" />,
        circleColor : 'bg-baby-6/30'
    },
    {
        icon: <UsersBroken color="rgb(51 65 85)" cls="absolute -top-2 -right-2" />,
        text: "یادگیری گروهی در تیم",
        circleColor: "bg-slate-700/30"
    },
    {
        icon: <GameBroken color="rgb(244 231 0)" cls="absolute -top-2 -right-2" />,
        text: "یادگیری از طریق بازی",
        circleColor: "bg-baby-4/30"
    },
    {
        icon: <EditSquareBroken color="rgb(0 123 255)" cls="absolute -top-2 -right-2" />,
        text: "سنجش یادگیری با آزمون",
        circleColor: "bg-baby-7/30"
    },
]
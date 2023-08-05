
interface teamDataProps {
    name : string
    id : number
    username : string
    gmail : string
    telegram ?: string
    instagram ?: string
    imgSrc : string
}

export const teamData : teamDataProps[] = [
    {
        id : 1,
        name : "محمد زورمند",
        username : "mohammad-zourmand",
        gmail : "zourmandrhbcontact@gmail.com",
        imgSrc : "/images/home/teachers/mohammad-zourmand.jpg",
        telegram : "tel.me/rahatbekhun_contact",
        instagram : "instagram.com/rahatbekhun"
    }
]
import { IconCameraSelfie } from '@tabler/icons-react';
import { ReactNode } from 'react';

export interface TrendArticlesInPartInfo {
    imgAlt : string
    imgSrc : string
    head : string
    time : number
    comments : number
    author : string
    date : string
    para : string
}

export interface PartsInfoProps {
    smallText : string
    largeText : string
    icon1 : ReactNode,
    icon2 : ReactNode,
    items : TrendArticlesInPartInfo[]
}

export const PartsInfo : PartsInfoProps[] = [
    {
        smallText : "هنر",
        largeText : "بخوانید و متناسب با آن تمرین کنید تا هنرمند بهتری باشید ...",
        icon1 : <IconCameraSelfie color="rgba(203,213,225,0.5)" className="absolute top-0 sm:right-[38%] right-[18%] -z-[1] rotate-[35deg] scale-[2.4]" stroke={2}/>,
        icon2 : <IconCameraSelfie color="rgba(203,213,225,0.5)" className="absolute top-0 sm:right-[26%] right-[8%] -z-[1] -rotate-[35deg] scale-[1.6]" stroke={2}/>,
        items : [
            {
                imgSrc : "/images/blog/office-table-with-cup-coffee-keyboard-notepad.jpg",
                imgAlt : "متن پایین فایل",
                head : "مطلب آموزشی ۱",
                time : 13,
                comments : 21,
                author : "آتوسا زورمند",
                date : "17 آبان",
                para : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است... "
            },
            {
                imgSrc : "/images/blog/office-table-with-cup-coffee-keyboard-notepad.jpg",
                imgAlt : "متن پایین فایل",
                head : "مطلب آموزشی ۱",
                time : 13,
                comments : 21,
                author : "آتوسا زورمند",
                date : "17 آبان",
                para : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است... "
            },
            {
                imgSrc : "/images/blog/office-table-with-cup-coffee-keyboard-notepad.jpg",
                imgAlt : "متن پایین فایل",
                head : "مطلب آموزشی ۱",
                time : 13,
                comments : 21,
                author : "آتوسا زورمند",
                date : "17 آبان",
                para : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است... "
            }
        ]
    }
]
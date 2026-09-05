
// ? Components =====================
import WebsiteInfo from "./websiteInfo";
import Heading6 from "../../elements/headings/h6";
import LiFooter from "../../elements/lists/liFooter";
import NewsLetters from "./newsletters";
import Rights from "./rights";
import { FooterLinksData1, FooterLinksData2 } from "./footerLinksData";

interface FooterProps {
    cls ?: string
}

const Footer = ({cls} : FooterProps) => {
    
    return (
        <footer className={`${cls} bg-gray-200/80 text-white flex flex-col lg:pb-0 pb-24`}>
            <div className="grid grid-cols-12 lg:gap-x-8 xl:px-12 lg:px-6 sm:px-12 sm:pt-12 sm:pb-6 pb-6">
                <WebsiteInfo  cls="lg:col-span-4 col-span-12" />
                <div className="lg:col-span-5 col-span-12 grid grid-cols-12 sm:p-6 p-2">
                    <div className="col-span-6">
                        <Heading6 cls="text-gray-900 lg:!text-right !text-center" text="لینک های سریع" />
                        <ul className="space-y-4 mt-6 text-sm">
                            { FooterLinksData1.map((item, index) => <LiFooter key={index} item={item}/>) }
                        </ul>
                    </div>
                    <div className="col-span-6">
                        <Heading6 cls="text-gray-900 lg:!text-right !text-center" text="ارتباط با ما" />
                        <ul className="space-y-4 mt-6 text-sm">
                            { FooterLinksData2.map((item, index) => <LiFooter key={index} item={item}/>) }
                        </ul>
                    </div>
                </div>
                <div className="lg:col-span-3 col-span-12 flex justify-center sm:py-6 py-2">
                    <NewsLetters />
                </div>
            </div>
            <Rights />
        </footer>
    )
}

export default Footer;
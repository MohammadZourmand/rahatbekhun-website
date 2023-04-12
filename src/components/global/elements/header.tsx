import Heading2 from "./headings/h2";
import Paragraph from "./paragraph";

import AOS from 'aos';

interface HeaderProps {
    headingText : string,
    paragraphText : string,
    headingCls ?: string,
    paragraphCls ?: string,
    cls ?: string
}

const Header : React.FC<HeaderProps> = ({
    headingText,
    paragraphText,
    headingCls,
    paragraphCls,
    cls
}) => {

    return (
        <div data-aos-duration={"2000"} data-aos={"fade-up"} className={`${cls} flex flex-col items-center lg:mx-[80px] md:mx-[40px] sm:mx-[30px] xs:mx-[10px]`}>
            <Heading2 text={headingText} cls={headingCls} />
            <Paragraph text={paragraphText} cls={paragraphCls} />
        </div>
    )
}

export default Header;
import Heading2 from "./headings/h2";
import Paragraph from "./paragraph";

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
        <header className={`${cls} flex flex-col items-center lg:mx-[80px] md:mx-[40px] sm:mx-[30px] xs:mx-[10px]`}>
            <Heading2 text={headingText} cls={headingCls} />
            <Paragraph text={paragraphText} cls={paragraphCls} />
        </header>
    )
}

export default Header;
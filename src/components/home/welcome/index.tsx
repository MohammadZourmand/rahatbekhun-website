// ? components ==================
import Header from "./header";
import Main from "./main";

const Welcome : React.FC = () => {

    return (
        <section className="flex flex-col mt-20 lg:mx-[80px] lg:text-6xl md:mx-[40px] md:text-6xl sm:mx-[30px] sm:text-5xl xs:mx-[10px] xs:text-[2.45rem] text-[2.65rem] leading-relaxed mb-16">
            <Header />
            <Main />
        </section>
    )
}

export default Welcome;
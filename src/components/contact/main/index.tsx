import Main from "./main";
import Aside from "./aside";


const ContactMain = () => {

    return (
        <section className="py-8 grid grid-cols-12 xl:px-4 lg:px-16 xl:gap-24 lg:gap-12 gap-y-12 my-32 max-w-7xl mx-auto">
            <Main />
            <Aside />
        </section>
    )
}

export default ContactMain;
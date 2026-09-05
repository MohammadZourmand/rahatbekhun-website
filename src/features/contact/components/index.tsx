import PageHeader from "../../../components/navigation/header/pageHeader";
import Footer from "../../../components/navigation/footer";
import Aside from "./aside";
import Main from "./main";


const Contact = () => {
  return (
    <>
      <PageHeader
        imgBgCls="sm:scale-100 md:h-auto h-full"
        cls="xl:h-[80vh]"
        title={"ارتباط با ما"}
        breadcrumbItems={[{ href: "/contact", value: "ارتباط با ما" }]}
        imgBgSrc={
          "/images/contact/smiling-little-boy-making-selfie-thinking-about-something.webp"
        }
      />
      <section className="py-8 grid grid-cols-12 xl:px-4 lg:px-16 xl:gap-24 lg:gap-12 gap-y-12 my-32 max-w-7xl mx-auto">
        <Main />
        <Aside />
      </section>
      <Footer />
    </>
  );
};

export default Contact;

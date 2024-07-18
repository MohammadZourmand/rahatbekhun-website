import Image from "next/image";

const FloatedPictures = () => {
    
    return (
        <>
            <Image
                src="/images/courses/page-title-shape-1.webp"
                alt="page-title-shape-1"
                className="absolute lg:block hidden top-[30rem] right-0 scale-[-1]"
                width={55}
                height={191}
            />
            <Image
                src="/images/courses/page-title-shape-6.webp"
                alt="page-title-shape-1"
                className="absolute right-4 top-80"
                width={56}
                height={59}
            />
            <Image
                src="/images/courses/course-dot.webp"
                alt="page-title-shape-1"
                className="absolute right-24 top-64 -z-10"
                width={70}
                height={110}
            />
            <Image
                src="/images/courses/page-title-shape-4.webp"
                alt="page-title-shape-1"
                className="absolute left-0 top-48 -scale-[1] -z-10"
                width={47}
                height={170}
            />
            <Image
                src="/images/contact/contact-shape-1.webp"
                alt="page-title-shape-1"
                className="absolute -left-10 top-[27rem] -scale-[1] -z-10"
                width={84}
                height={90}
            />
        </>
    )
}

export default FloatedPictures;
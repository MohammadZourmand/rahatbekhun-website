import { FC } from "react";

const FloatedPictures : FC = () => {

    return (
        <>
            <img
                src="/images/courses/page-title-shape-1.webp"
                alt="page-title-shape-1"
                className="absolute top-[30rem] right-0 scale-[-1]"
            />
            <img
                src="/images/courses/page-title-shape-6.webp"
                alt="page-title-shape-1"
                className="absolute right-4 top-80"
            />
            <img
                src="/images/courses/course-dot.webp"
                alt="page-title-shape-1"
                className="absolute right-24 top-64 -z-10"
            />
            <img
                src="/images/courses/page-title-shape-4.webp"
                alt="page-title-shape-1"
                className="absolute left-0 top-48 -scale-[1] -z-10"
            />
            <img
                src="/images/contact/contact-shape-1.webp"
                alt="page-title-shape-1"
                className="absolute -left-10 top-[27rem] -scale-[1] -z-10"
            />
        </>
    )
}

export default FloatedPictures;
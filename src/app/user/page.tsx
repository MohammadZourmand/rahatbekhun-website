import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import Image from "next/image";


export default function User() {
    return (
        <>
            <Navbar isWhite={false} />
            <div className="w-full flex items-center justify-center flex-col text-gray-800 font-bold leading-loose text-xl text-center py-16">
                <Image 
                    src={'/images/home/teamwork.webp'}
                    alt="کار تیمی"
                    width={320}
                    height={320}
                    className="mb-3"
                />
                هنوز قابلیت ثبت نام به سایت اضافه نشده است !
                <br />
                این قابلیت به زودی به سایت اضافه می گردد !
            </div>
            <Footer />
        </>
    )
}
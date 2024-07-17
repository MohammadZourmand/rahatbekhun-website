import Image from "next/image";

const NavImg = () => {

    return (
        <div>
            <Image 
                className="!self-center"
                src="/images/home/reading-kids.webp"
                alt="درس خواندن با راحت بخون"
                width={256}
                height={256}
            />
        </div>
    )
}

export default NavImg;
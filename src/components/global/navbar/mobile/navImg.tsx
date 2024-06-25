import Image from "next/image";

const NavImg : React.FC = () => {

    return (
        <div>
            <Image 
                className="!self-center"
                src="/images/home/reading-kids.jpg"
                alt="درس خواندن با راحت بخون"
                width={256}
                height={256}
            />
        </div>
    )
}

export default NavImg;
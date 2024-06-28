import { UserBrokenIcon } from "@/assets/icons";
import Image from "next/image";

interface UserGradeChooserProps {
    grade : string
}

const UserGradeChooser = ({grade} : UserGradeChooserProps) => {

    switch (grade) {
        case "خالق":
            return (
                <Image
                    src="/images/userGrades/creator.png"
                    alt="خالق"
                    width={64}
                    height={64}
                />
            )
    
        default:
            return (<UserBrokenIcon cls="fill-gray-800" />)
    }
}

export default UserGradeChooser;
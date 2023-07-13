import { UserBrokenIcon } from "@/assets/icons";
import { FC } from "react";

interface UserGradeChooserProps {
    grade : string
}

const UserGradeChooser : FC<UserGradeChooserProps> = ({grade, }) => {

    switch (grade) {
        case "خالق":
            return (
                <div className="bg-gray-50 w-16 h-16 flex items-center justify-center rounded-full">
                    <img src="./images/userGrades/creator.png" />
                </div>
            )
    
        default:
            return (<UserBrokenIcon cls="fill-gray-800" />)
    }
}

export default UserGradeChooser;
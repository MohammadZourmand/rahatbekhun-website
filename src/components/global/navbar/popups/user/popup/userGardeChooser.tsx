import { UserBrokenIcon } from "@/assets/icons";
import { FC } from "react";

interface UserGradeChooserProps {
    grade : string
}

const UserGradeChooser : FC<UserGradeChooserProps> = ({grade, }) => {

    switch (grade) {
        case "خالق":
            return (
                <img src="./images/userGrades/creator.png" />
            )
    
        default:
            return (<UserBrokenIcon cls="fill-gray-800" />)
    }
}

export default UserGradeChooser;
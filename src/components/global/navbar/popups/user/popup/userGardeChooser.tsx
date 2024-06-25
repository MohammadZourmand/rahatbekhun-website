import { UserBrokenIcon } from "@/assets/icons";

interface UserGradeChooserProps {
    grade : string
}

const UserGradeChooser = ({grade} : UserGradeChooserProps) => {

    switch (grade) {
        case "خالق":
            return (
                <img src="/images/userGrades/creator.png" />
            )
    
        default:
            return (<UserBrokenIcon cls="fill-gray-800" />)
    }
}

export default UserGradeChooser;
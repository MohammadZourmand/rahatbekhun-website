
import Navbar from "@/components/global/navbar";
import SignUpForm from "./form";
import Footer from "@/components/global/footer";


const SignUp : React.FC = () => {



    return (
        <>
            <Navbar isWhite={false} />
            <SignUpForm />
            <Footer />
        </>
    )
}

export default SignUp;
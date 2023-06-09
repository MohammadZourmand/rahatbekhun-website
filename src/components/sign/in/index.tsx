
import Navbar from "@/components/global/navbar";
import SignInForm from "./form";
import Footer from "@/components/global/footer";


const SignIn : React.FC = () => {



    return (
        <>
            <Navbar isWhite={false} />
            <SignInForm />
            <Footer />
        </>
    )
}

export default SignIn;

import Navbar from "@/components/navigation/navbar";
import SignInForm from "./form";
import Footer from "@/components/navigation/footer";


const SignIn = () => {

    return (
        <>
            <Navbar isWhite={false} />
            <SignInForm />
            <Footer />
        </>
    )
}

export default SignIn;
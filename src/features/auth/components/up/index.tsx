
import Navbar from "@/components/navigation/navbar";
import SignUpForm from "./form";
import Footer from "@/components/navigation/footer";


const SignUp = () => {



    return (
        <>
            <Navbar isWhite={false} />
            <SignUpForm />
            <Footer />
        </>
    )
}

export default SignUp;
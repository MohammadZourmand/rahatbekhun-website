import SignUp from "@/components/sign/up";
import { signUpBreadCrumbsJson } from "@/meta/sign";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: 'عضویت در راحت بخون',
    description: 'استفاده از تخفیف ها و دوره ها و کاربرگ های بیشتر با عضویت در وبسایت راحت بخون',
    keywords : [''],
    alternates : {
        canonical : 'https://rahatbekhun.com/sign-up'
    }
}

const SignUpPage : NextPage = () => {

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(signUpBreadCrumbsJson)
                }}
            />
            <SignUp />
        </>
    )
}

export default SignUpPage;
import SignIn from "@/components/sign/in";
import { signInBreadCrumbsJson } from "@/meta/sign";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: 'ورود به راحت بخون',
    description: 'استفاده از تخفیف ها و دوره ها و کاربرگ های بیشتر با ورود به وبسایت راحت بخون',
    keywords : [''],
    alternates : {
        canonical : 'https://rahatbekhun.com/sign-in'
    }
}

const SignInPage : NextPage = () => {

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(signInBreadCrumbsJson)
                }}
            />
            <SignIn />
        </>
    )
}

export default SignInPage;
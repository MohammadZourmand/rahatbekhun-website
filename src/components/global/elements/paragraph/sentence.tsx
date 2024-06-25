interface SentenceProps {
    text : string
    cls ?: string
    teller ?: string
    paraCls ?: string
    tellerCls ?: string
}

const Sentence = ({text, cls, teller, paraCls, tellerCls} : SentenceProps) => {

    return (
        <div className={`${cls} relative my-14 p-12 bg-gray-100 text-gray-800 overflow-hidden`}>
            <p className={`${paraCls} text-xl font-medium leading-loose`}>{text}</p>
            {
                teller && <div className={`relative mt-6 ${tellerCls}`}>
                    <h6 className="pr-6 text-gray-900 font-bold">{teller}</h6>
                    <div className="absolute w-4 h-4 top-0 right-0
                        border-b-[3px] border-gray-900">
                    </div>
                </div>
            }
            <img
                className="absolute -bottom-6 left-16"
                src="/images/blog/quote.webp"
                alt="quote-italics-lines"
            />
        </div>
    )
}

export default Sentence;
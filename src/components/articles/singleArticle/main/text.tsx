
const SingleArticlesMainText = ({article}) => {

    console.log(article)

    return (
        <article>
            <h1 className="text-5xl font-extrabold leading-loose mb-5 text-gray-700">
                {article?.name}
            </h1>
            <div className="text-gray-600" dangerouslySetInnerHTML={{__html: article?.body}}></div>
        </article>
    )
}

export default SingleArticlesMainText;
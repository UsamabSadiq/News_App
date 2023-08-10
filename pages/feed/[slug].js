import { useRouter } from "next/router"

const Slug = ({ articles, pageNumber }) => {
    // console.log(articles, pageNumber);
    const router = useRouter()
    return (
        <>
            <div className="main max-w-[1440px] mx-auto mt-4">
                <div className="content gap-4 w-1/2 mx-auto">
                    {articles.map((article, index) => {
                        return (
                            <>
                                <div key={index + 1}>
                                    <div className="main-heading flex gap-4 mb-5">
                                        <span className="font-medium">{index + 1}.</span>
                                        <h3 onClick={() => window.location.href = article.url} className="title underline font-semibold text-xl cursor-pointer">
                                            {article.title}
                                        </h3>
                                        <span className="inline-block">{article.author}</span>
                                    </div>
                                    <div className="desc text-lg text-justify mb-2">{article.description}</div>

                                    <div className="img mt-4 mb-8">
                                        <img src={article.urlToImage} alt="" />
                                        <div className="my- border-b-2 border-x-slate-600"></div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }

                    <div className="pageContainer flex justify-around items-center mb-3">
                        <div className={`${pageNumber === 1 ? "disabled:opacity-70" : "active:opacity-25"} cursor-pointer border-2 border-slate-400 py-1 px-4 rounded-lg hover:bg-slate-500 duration-300`} onClick={() => {
                            if (pageNumber > 1) {
                                router.push(`/feed/${pageNumber - 1}`)
                            }
                        }}>
                            PREV
                        </div>
                        <div className="pageNum">{'# ' + pageNumber}</div>

                        <div className={`${pageNumber === 5 ? "disabled:opacity-70" : "active:opacity-25"} cursor-pointer border-2 border-slate-400 py-1 px-4 rounded-lg hover:bg-slate-500 duration-200`} onClick={() => {
                            if (pageNumber < 5) {
                                router.push(`/feed/${pageNumber + 1}`)
                            }
                        }}>
                            NEXT
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {

    const pageNumber = context.query.slug
    console.log('pageNumber', pageNumber);
    if (!pageNumber || pageNumber > 5 || pageNumber < 1) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
            }
        }
        // &apiKey=9f562365939a4e94a85684951acd9b41
    )
    const data = await response.json()

    const { articles } = data;

    return {
        props: {
            articles,
            pageNumber: Number(pageNumber)
        }
    }
}

export default Slug

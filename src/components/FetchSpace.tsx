import { Container } from "react-bootstrap"
import { useState, useEffect} from "react"
import ArticleOfSpace from "../interfaces/articleOfSpace"

const FetchSpace = () => {
    const [article, setArticle] = useState<ArticleOfSpace[]>([])

    useEffect(() =>{
        fetch("https://api.spaceflightnewsapi.net/v4/articles/")
        .then((res)=>{
            if (res.ok){
                return res.json()
            } else{
                throw new Error("Errore nel recupero dati")
            }
        })
        .then((data)=>{
            setArticle(data.results)
           
        })
        .catch((err)=>{
            console.log("Errore", err)
        })
    }, [])

    return (
        <Container>
                <h1>CiaoNe</h1>
                <div>
                    <ul>
                    {article.length > 0 ? (article.map((r)=>{
                        return (
                            <li key={r.id}>
                               <div>{r.title}</div> 
                               <div>{r.published_at}</div> 
                               <div>
                                    <a href={r.url} target="_blank" rel="noopener noreferrer">{r.title}</a>
                                </div>
                               <img src={r.image_url} alt={r.title} style={{ height: "100px" }}/>
                               <div>{r.summary}</div> 
                            </li>
                        )
                    })):(<p>Aspettaoo</p>)}
                    </ul>
                </div>
        </Container>
    )
}

export default FetchSpace
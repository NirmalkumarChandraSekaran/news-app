import { useEffect, useState } from "react"
import Newitem from "./Newitem";
const Newsboard=({category})=>
{
  console.log(category)
const [articles, setarticles] = useState([]);

  useEffect(() => {
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=cc2fc5a000cb4864970c9898067de639`;
    fetch(url).then(response=>response.json()).then(data=>setarticles(data.articles))
   
  }, [category]);

  return (
    <div>
    <h2 className="text-center my-3">Latest <span className="badge bg-danger">News</span></h2>
   {articles.map((news,index)=>
    {
      return <Newitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
    })}
    </div>
  )
}

export default Newsboard
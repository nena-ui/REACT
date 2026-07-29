import React, { useState } from 'react'
import Newscard from './Newscard'

const Newslist = () => {
   


  const [news,setNews] = useState([])
        const fetchNews = async()=> {
            const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2026-06-28&sortBy=publishedAt&apiKey=ce222b8df4be4b19ab5d0f091a6a15f7")
           const finalResponse = await response.json()
           setNews(finalResponse.articles)
        
        }


console.log(news)



  return (
    <div>
        <div>
<button onClick={fetchNews} className='border border-gray-400'>Get News</button>
        </div>

{news.map((item,index)=>(
  <div>
        <div>
<button onClick={fetchNews} className='border border-gray-400'>Get News</button>
        </div>
        <div>
        {news.map((item)=> (
             <Newscard key={item.id} news={item} />
        ))}    
        </div>
        </div>
   
))}

     
        </div>
  )
}

export default Newslist
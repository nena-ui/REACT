import React, { useState } from 'react'
import Newscard from './Newscard'

const Newslist = () => {
   
  const [news,setNews] = useState([])

        const fetchNews = async()=> {

            const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3a84d3907fd24da7b4ceaafee4147c2c')

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

        <div className="grid gird-cols-3 gap-8">
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
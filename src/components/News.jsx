import {useState,   useEffect} from "react";

import {axiosPrivate} from '../api/axios'

function News(){
const news={title:"News",impact:"Impact",forecast:"Forecast",date:"Date",previous:"Previous"}
const [news1,setNews1] = useState([
])
   const [error, setError] = useState('')

function findNews(){
const getNews=axiosPrivate.get( 'https://nfs.faireconomy.media/ff_calendar_thisweek.json?version=93fd1f39fb0d4f72a8f973ba1d48194d')
console.log(getNews)
if(getNews.status===200){
    setNews1(getNews.data)
    console.log(news +"    "+ error)
    setError(null)}
    else{
        console.log('error'+ getNews.message)
        setError(getNews.message)
    }


    }
    useEffect(()=>{
        findNews()
    })
return(
<>
    <div className="row">
        <div className="col-md-8">
            <h1>{news.title}</h1>
        
    {news1.map((news,index)=>(
      <div className="col-md-8">
        <h4>{news.title}</h4>
        <p>{news.impact}</p>
        <p>{news.forecast}</p>
        <p>{news.date}</p>
        <p>{news.previous}</p>
        </div>

        ))
    }
                </div>
            </div>
</>)
   }

export default News;
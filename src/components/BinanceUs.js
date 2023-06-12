import React,{useState,useEffect} from'react';
import {axiosPrivate} from '../api/axios';
import { Container } from 'react-bootstrap';
function BinanceUs() {
const [data,setData]=useState([])
function connect() {
 axiosPrivate.get("https://api.binance.us/api/v3/ticker/price")
.then(res=>{
console.log(res.data)
setData(res.data)
})
.catch(err=>{
console.log(err)
})
}
useEffect(()=>{
connect()
},[data])


return(<Container><div>
<h1>Binance US</h1>
<h2>Price</h2>
<h2>24h Volume</h2>
<h2>24h High</h2>
<h2>24h Low</h2>
<h2>24h Change</h2>
<h2>24h Change %</h2></div>















</Container>)
}
export default BinanceUs;
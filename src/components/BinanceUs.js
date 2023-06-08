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


return(<Container>
<h3>Binance US</h3>
{
data.map((item)=>{
return(
<div>
<h2>{item.symbol}</h2>
<h3>{item.price}</h3>

</div>)})}


</Container>)}
export default BinanceUs;
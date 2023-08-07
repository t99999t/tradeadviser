import {useState,useEffect} from'react';
import axios from '../api/axios'

import {Container} from 'react-bootstrap'
function Oanda(){


const [error, setError] = useState(null)
const [isLoaded] = useState(false)
const [data, setData] = useState(null)

useEffect(()=>{
handleSubmit()
},[error, data, handleSubmit])



function handleSubmit(){

axios.get('https://api-fxtrade.oanda.com/v2/instruments/EURUSD')
.then(res=>{
setData(res.data)
}).catch(err=>{

setError(err)})

return isLoaded
}



return(<Container >
<div> <h2> OANDA</h2></div>





</Container>)
}

export default Oanda
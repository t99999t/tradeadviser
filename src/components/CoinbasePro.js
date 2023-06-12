import { useState, useEffect } from'react'
import  { axiosPrivate } from '../api/axios'
function CoinbasePro() {

const [data, setData] = useState(null)
const [error, setError] = useState(null)

useEffect(() => {

    const response = axiosPrivate.get('https://api.pro.coinbase.com/products/BTC-USD')

    const data =  response
    setError(null)
    if(data.status !==200 || data.message!== null) {
    setError(data.message)
    }else

    setData(response.data)
  },[data, error])









return (<>
<div className="content">
<h1>Coinbase Pro</h1>
{error && <p>{error}</p>}
<p>{data}</p>
</div>
</>)
}

export default CoinbasePro
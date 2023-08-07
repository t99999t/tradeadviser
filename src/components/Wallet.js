import React ,{useEffect,useState}from'react';

 function Wallets(){
 const [wallets,setWallets] = useState([]);
 useEffect(
 ()=>{
     fetch('http://localhost:3000/wallets')
   .then(res=>res.json())
   .then(data=>setWallets(data))

 })



    return (<>
    <h1>Wallets</h1>
    {
    wallets.map(wallet=>
    <div key={wallet.id}>
        <h2>{wallet.name}</h2>
        <p>{wallet.balance}</p>
    </div>)}



    </>)
}

export default Wallets
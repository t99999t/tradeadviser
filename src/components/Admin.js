
import {useState,useEffect} from'react';
import {axiosPrivate} from '../api/axios';

export default function Admin() {//Create a function called Admin() that returns the HTML for the admin page.

const [users,setUsers]=useState([]);
const [error,setError]=useState(null);

async function getUsers(){
try{
const res=await axiosPrivate.get('/api/users/list');
setUsers(res.data);
console.log(res.data);
}
catch(err){
console.log(err);
setError(err.response.data.message);
}
}


useEffect(()=>{
getUsers();
},[error,users])




return(<><h1> Admin Page</h1>
<p>Welcome to Admin </p>

 <p>Users</p>




</>
)





}
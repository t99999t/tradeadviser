
import {useState,useEffect} from'react';
import {axiosPrivate} from '../api/axios';

export default function Admin() {//Create a function called Admin() that returns the HTML for the admin page.

const [users,setUsers]=useState([]);
const [error,setError]=useState('');

async function getUsers(){

return await axiosPrivate.get('/api/users/list').then(res=>{
setUsers(res.data);}).
catch(err=>{
setError(err.response.data.error);
});
}

useEffect(()=>{
getUsers();})





return(<>
<h2>Admin</h2>
<p>Error: {error}</p>
<button onClick={getUsers}>Get Users</button>
 <p>Users</p>
</>
)





}
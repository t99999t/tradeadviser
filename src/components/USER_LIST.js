
import React, {useState,useEffect} from'react'
import axiosPrivate from '../api/axios'
const USER_LIST= ()=>{

const userss=[
{

    id:1,
    username:"Doe",
    email:"kenaa@example.com",
    password:"12345678",
    role:"admin"
},
{

    id:2,
    username:"Jane Doe",
    email:"kenaa@example.com",
    password:"12345678",
    role:"user"}
    ,
    {
    id:3,
    username:"Jane Doe",
    email:"kenaa@example.com",
    password:"12345678",
    role:"user"}


]

const [users,setUsers]=useState(userss)
useEffect(()=>{
    console.log(users)

    axiosPrivate.get('api/users')
    .then(res=>{
    setUsers(res.data)}).catch(err=>{console.log(err)})
    },[users])


return (
<div className ="users">
<h1>Users</h1>

</div>)

}

export default USER_LIST


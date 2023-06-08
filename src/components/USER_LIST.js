const USER_LIST= ()=>{

const users=[
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

return (<>
<div className ="users">
<h1>Users</h1>

{
users.map((user,index)=>(
    <div key={index} className="user">
        <h3>{user.username}</h3>
        <h3>{user.email}</h3>
        <h3>{user.role}</h3>
    </div>))}
    </div>



</>)

}

export default USER_LIST


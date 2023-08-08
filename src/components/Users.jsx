import React from 'react';
import { useEffect,useState } from 'react';
import UserProfile from './UserProfile';
import Post from './Post';


const  Users=() => {

   //Get the users from the database
   const [users1, setUsers1] =useState([

   ]); 
   useEffect(() => {

    console.log(users1);
    setUsers1(users1);
  
   }, [users1]);


    const posts = [
        { author: 'John Doe', content: 'Hello, world!' },
        { author: 'Jane Smith', content: 'React is awesome!' },
    ];

    return (
        <div className="Users">

            <UserProfile name={users1} profileImage={users1.profileImage} />
            {posts.map((post, index) => (
                <Post key={index} author={post.author} content={post.content} />
            ))}
        </div>
    );
}

export default Users;

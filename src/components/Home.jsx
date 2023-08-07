
import React, { useEffect, useState,useRef } from "react";
import LinkPage from "./LinkPage";
import { Card,Container,Table } from "react-bootstrap";
import axiosPrivate from "../api/axios"
import { Link } from "react-router-dom";




function Home () {
     const [user, setUser] = useState(null);
     const userRef = useRef('');

const [userData, setUserData] = useState([]);

useEffect(() => {
    // Fetch user data from the API endpoint
    const fetchUserData = async () => {
      try {
        const response = await axiosPrivate.get('/api/users/id'); // Replace with your actual API endpoint
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
     
    };
  
  
  fetchUserData();
  }, []);
    console.log(userData);
    



return ( <div>
       <h1>
    <nav>
    <ul className="navbar-links">
    <li><a href="dashboard">Dashboard</a></li>
       <li><a href="products">Products</a></li>
       <li><a href="categories">Categories</a></li>
       <li><a href="orders">Orders</a></li>
           <li><a href="trade">Trading</a></li>
      <li><a href="platform">Platform</a></li>
       <li><a href="ecommerce">Ecommerce</a></li>
     <li><a href="users">Users Pages</a></li>
       <li><a href="youtube">Youtube Video</a></li>
       <li><a href="editors">Editors Page</a></li>
     <li><a href="employee">Employee Page</a></li>
      <li><a href="admin">Admin Page</a></li>
       <li><a href="news">News Page</a></li>
     <li><a href="logout">Logout</a></li>
      </ul>
   </nav>

  </h1>
  <div className="container">
  <div className="row">
  <div className="col-md-12">
  <div className="card">
  <div className="card-body">
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>)



}


export default Home;





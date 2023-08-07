import React, { useState } from 'react';

const RoommateList = () => {
  const [roommates, setRoommates] = useState([]);

  // Add your code to fetch and set the roommate data

  const handleEdit = (id) => {
    // Add your code to navigate to the edit page for the selected roommate
  };
useEffect(() => {
 setRoommates( fetch('http://localhost:3000/roommates')
  .then((res) => res.json()
  ))
  }, [setRoommates]);
  const handleDelete = (id) => {
    // Add your code to delete the selected roommate
  };


  return (
    <div>
      <h2>Roommate List</h2>
      {/* Render the list of roommates */}
      {roommates.map((roommate) => (
        <div key={roommate.id}>
          <p>{roommate.name}</p>
          <button onClick={() => handleEdit(roommate.id)}>Edit</button>
          <button onClick={() => handleDelete(roommate.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RoommateList;

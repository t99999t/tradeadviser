import React, { useState } from 'react';

const AddRoommate = () => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    // Add your code to add a new roommate
  };

  return (
    <div>
      <h2>Add Roommate</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter roommate's name"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddRoommate;
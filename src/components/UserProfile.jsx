import React from 'react';

function UserProfile(props) {
  const { username, profileImage } = props;

  return (
    <div className="user-profile">
      <img src={profileImage} alt={username} />
      <h2>{username}</h2>
      <h>FirstName {props.firstName}</h>
      <h>LastName {props.lastName}</h>
      <h>Email {props.email}</h>
      <button>Follow</button>
    </div>
  );
}

export default UserProfile;
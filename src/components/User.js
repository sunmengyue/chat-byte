import React from 'react';
import '../Styles/User.css';

const User = ({ user }) => {
  const { name, status, profile_pic } = user;

  return (
    <div id="user">
      <img src={profile_pic} alt={name} className="user__pic" />
      <div className="user__details">
        <p className="user__details-name">{name}</p>
        <p className="user__details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;

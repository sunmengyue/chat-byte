import React from 'react';
import User from './User';
import '../Styles/Sidebar.css';

const Sidebar = ({ contacts }) => {
  return (
    <aside id="sidebar">
      {contacts.map((contact) => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
};

export default Sidebar;

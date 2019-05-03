import React from "react";
import "./Header.css";

const Header = ({ user }) => {
  const { name, status, profile_pic } = user;
  return (
    <header className="Header">
      <img src={profile_pic} alt={name} className="Header__pic" />
      <div className="Header__info">
        <h1 className="Header__name">{name}</h1>
        <p className="Header__status">{status}</p>
      </div>
    </header>
  );
};

export default Header;

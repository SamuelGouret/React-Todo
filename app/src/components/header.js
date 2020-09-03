import React from 'react';
import '../style/header.css';

function Header({formData}) {
  return (
    <div className="Header">
      <h1> My list of Todo {formData.title}</h1>
    </div>
  );
}

export default Header;

import React from 'react';

const Menu = () => {
  return (
    // <nav>
    //   <ul>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Services</li>
    //     <li>Contact</li>
    //   </ul>
    // </nav>
    <nav>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="# ">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </nav>

  );
};

export default Menu;
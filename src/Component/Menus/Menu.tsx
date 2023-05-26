import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { MouseEvent } from 'react';

const Menu = () => {
  let items = ["Redbull racing", "Ferrari", "mclaren", "AMG Petronas", "Alphine Racing", "Aston Martin"]
  // items = []
  const handleClick = (event: MouseEvent) => console.log(event);
  return (


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {items.length === 0 && <p>No Items is found in the list</p>}
          <ul className="navbar-nav flex-column">
            {items.map((x, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" aria-current="page" type='button' onClick={handleClick}>{x}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Menu;
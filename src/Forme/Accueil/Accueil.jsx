import React, { useState } from 'react';
import './style.css';
import Statistique from '../Statistique/Statistique';
import Insertion from '../Insertion/Insertion';
import Validation from '../Validation/Validation';
import Modification from '../Modification/Modification';

function Accueil() {
  const [page, setPage] = useState(0);

  return (
    <>
      <div className="containerI">
        <div className="navigation">
          <ul>
            <li>
                <span className="icon">
                  <ion-icon name="logo-apple"></ion-icon>
                </span>
                <span className="title">Admin</span>
            </li>

            <li
              onClick={() => {
                setPage(0);
              }}
            >
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="title">Statistique</span>
            </li>

            <li
              onClick={() => {
                setPage(1);
              }}
            >
              <span className="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span className="title">Insertion</span>
            </li>

            <li
              onClick={() => {
                setPage(3);
              }}
            >
              <span className="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span className="title">Modification</span>
            </li>

            <li
              onClick={() => {
                setPage(2);
              }}
            >
              <span className="icon">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span className="title">Annonce a Valider</span>
            </li>
          </ul>
        </div>

        <div className="main">
          <div className="topbar">
            <div className="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div>
{/* 
            <div className="search">
              <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div> */}

            <div className="user">
                  <img className="img-profile rounded-circle" src="./boy.png" alt='Admin'></img>
                  <span className="ml-2 d-none d-lg-inline text-white small"></span>
            </div>
          </div>
          {page === 0 && <Statistique />}
          {page === 1 && <Insertion />}
          {page === 2 && <Validation />}
          {page === 3 && <Modification />}
        </div>
      </div>

      <script src="assets/js/main.js"></script>

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  );
}

export default Accueil;

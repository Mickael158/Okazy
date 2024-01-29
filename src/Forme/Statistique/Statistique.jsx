import React, { useState, useEffect } from 'react';
import './style.css';
import './vendor/bootstrap/css/bootstrap.min.css';

function Statistique() {
  const token = localStorage.getItem('token');
    const apiUrlVente = 'https://okazy-production.up.railway.app/venteavgs';
      
      const [vente, setVente] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          const requestOptions = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          };
          try {
            const response = await fetch(apiUrlVente, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setVente(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlVente, token]); 
    ///////////////////////////////////////////////////////////////////////////////////
    const apiUrlBenefice = 'https://okazy-production.up.railway.app/benefs';
      
      const [benefice, setBenefice] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          const requestOptions = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          };
          try {
            const response = await fetch(apiUrlBenefice, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setBenefice(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlBenefice, token]); 
      ///////////////////////////////////////////////////////////////////////////
      const apiUrlNbrAnnonce = 'https://okazy-production.up.railway.app/annonces/nonvalides/count';
      
      const [count, setCount] = useState('');
    
      useEffect(() => {
        const fetchData = async () => {
          const requestOptions = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          };
          try {
            const response = await fetch(apiUrlNbrAnnonce, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setCount(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlNbrAnnonce, token]); 

    ////////////////////////////////////////////////////////////////////////////
    const apiUrlNbrVente = 'https://okazy-production.up.railway.app/ventes/count';
      
      const [NbrVente, setNbrVente] = useState('');
    
      useEffect(() => {
        const fetchData = async () => {
          const requestOptions = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          };
          try {
            const response = await fetch(apiUrlNbrVente, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setNbrVente(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlNbrVente, token]); 
    //////////////////////////////////////////////////////////////////////////////

    const apiUrlNbrUtilisateur = 'https://okazy-production.up.railway.app/user/count';
      
      const [nbrUtilisateur, setNbrUtilisateur] = useState('');
    
      useEffect(() => {
        const fetchData = async () => {
          const requestOptions = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          };
          try {
            const response = await fetch(apiUrlNbrUtilisateur, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setNbrUtilisateur(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlNbrUtilisateur, token]); 
    /////////////////////////////////////////////////////////////////////////////////////////

    const apiUrlNbrBenefice = 'https://okazy-production.up.railway.app/annonces/valides/count';
      
      const [nbrBenefice, setNbrBenefice] = useState('');
    
      useEffect(() => {
        const fetchData = async () => {
          const requestOptions = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          };
          try {
            const response = await fetch(apiUrlNbrBenefice, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setNbrBenefice(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlNbrBenefice, token]); 
  return (
    <>
      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">{count}</div>
            <div className="cardName">Annonce non Valide</div>
          </div>

          <div className="iconBx">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">{NbrVente}</div>
            <div className="cardName">Nombre de vente</div>
          </div>

          <div className="iconBx">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">{nbrUtilisateur}</div>
            <div className="cardName">Nombre utilisateur</div>
          </div>

          <div className="iconBx">
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">{nbrBenefice}</div>
            <div className="cardName">Annonce pas vendu</div>
          </div>

          <div className="iconBx">
            <ion-icon name="cash-outline"></ion-icon>
          </div>
        </div>
      </div>
    {/* ----------------------------------------------------------------------------------------------- */}
    <center>
          <div className="cardHeader">
            <h2>Vente par Mois</h2>
          </div>
      <div className="main-container1">
        <div className=".year-stats1">
          {vente.map((stat, index) => (
          <div className="month-group1"key={index}>
            <div className={`bar h-${stat.value}`} ></div>
            <p className="month">{stat.mois}</p>
          </div>
          ))}
        </div>
      </div>
      
    </center> 
             
    {/* ----------------------------------------------------------------------------------------------- */}
    
    <div className="row">
                <div className="col-lg-12">
                    <div className="card mb-4">
                        <div className="container-fluid" id="container-wrapper">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="m-0 font-weight-bold text-primary">Benefice par Anne Pour chaque Marque</h1>
                        </div>
                        </div>
                        <div className="table-responsive p-3">
                            <table className="table align-items-center table-flush" id="dataTable">
                                <thead className="thead-light">
                                <tr>
                                  <td>Date</td>
                                  <td>Marque</td>
                                  <td>Benefice</td>
                                  <td>Pourcentage</td>
                                </tr>
                                </thead>
                                <tbody>
                                {benefice.map((bene, index) => (
                                    <tr key={index}> 
                                    <td>{bene.annee}</td>
                                    <td>{bene.marque.nom}</td>
                                    <td>{bene.benef} Ar</td>
                                    <td>{bene.pourcentage}</td>
                                  </tr>
                                  ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
     
    </>
  );
}

export default Statistique;

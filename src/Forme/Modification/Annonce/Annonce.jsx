import React, { useState, useEffect } from 'react';
function Annonce() {
  
    const token = localStorage.getItem('token');
    const apiUrlAnnoce = 'https://okazy-production.up.railway.app/annonces';
      
      const [annonce, setAnnonce] = useState([]);
    
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
            const response = await fetch(apiUrlAnnoce, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setAnnonce(data.data);
            console.log(data.data)
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlAnnoce, token]); 
  
     
    
    ///////////////////////////////////////////////////////////////////////////////////
    const handleSuppre = async (e, id)  => {
      e.preventDefault();
      const apiUrlValide = `https://okazy-production.up.railway.app/annonces/${id}`;
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
    
      try {
        const response = await fetch(apiUrlValide, requestOptions);
      
        if (!response.ok) {
          throw new Error('La requête a échoué.');
        }
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Erreur lors de la requête à l\'API:', error);
      }
    };
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card mb-4">
                        <div className="container-fluid" id="container-wrapper">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="m-0 font-weight-bold text-primary">Validation</h1>
                        </div>
                        </div>
                        <div className="table-responsive p-3">
                            <table className="table align-items-center table-flush" id="dataTable">
                                <thead className="thead-light">
                                <tr>
                                    <th>Proprietaire</th>
                                    <th>Marque</th>
                                    <th>Proprietaire</th>
                                    <th>Prix</th>
                                    <th>Description</th>
                                    <th>Supprimer</th>
                                </tr>
                                </thead>
                                <tbody>
                                {annonce.map((vaike, index) => (
                                    <tr key={index}>
                                        <td>{vaike.utilisateur.nom}</td>
                                        <td>{vaike.voiture.marque.nom}</td>
                                        <td>{vaike.date}</td>
                                        <td>{vaike.titre}</td>
                                        <td>{vaike.description}</td>
                                        <td> <button className="btn btn-primary" onClick={(e) => handleSuppre(e, vaike.id)} > Supprimer </button> </td>
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

export default Annonce

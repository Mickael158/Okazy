import React, { useState, useEffect } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css'

function VoitureM() {
  
    const token = localStorage.getItem('token');
    const apiUrlVoiture = 'https://okazy-production.up.railway.app/voitures';
      
      const [voiture, setVoiture] = useState([]);
    
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
            const response = await fetch(apiUrlVoiture, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setVoiture(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlVoiture, token]); 
  
     
    
    ///////////////////////////////////////////////////////////////////////////////////
    const handleSuppre = async (e, id)  => {
      e.preventDefault();
      const apiUrlValide = `https://okazy-production.up.railway.app/voitures/${id}`;
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
                                    <th>Marque</th>
                                    <th>Model</th>
                                    <th>Puissance Fiscale</th>
                                    <th>Cylindre</th>
                                    <th>Puissance Moteur</th>
                                    <th>Cassis</th>
                                    <th>Nombre de Porte</th>
                                    <th>Nombre de Place</th>
                                    <th>Mise en circulation</th>
                                    <th>Supprimer</th>
                                </tr>
                                </thead>
                                <tbody>
                                {voiture.map((vaike, index) => (
                                    <tr key={index}>
                                        <td>{vaike.marque.nom}</td>
                                        <td>{vaike.model.nom}</td>
                                        <td>{vaike.puissancefiscale}</td>
                                        <td>{vaike.cylindre}</td>
                                        <td>{vaike.puissancemoteur}</td>
                                        <td>{vaike.cassis.nom}</td>
                                        <td>{vaike.nombreporte}</td>
                                        <td>{vaike.nombreplace}</td>
                                        <td>{vaike.miseencirculation}</td>
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

export default VoitureM

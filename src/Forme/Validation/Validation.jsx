import React, { useState, useEffect } from 'react';

function Validation() {
  const apiUrl = 'https://okazy-production.up.railway.app/annonces/nonvalides';
  const token = localStorage.getItem('token');

  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(apiUrl, requestOptions);
      if (!response.ok) {
        throw new Error('La requête a échoué.');
      }
      const data = await response.json();
      setAnnonces(data.data);
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API:', error);
    }
  };

  fetchData(); 
}, [apiUrl, token]);
// ----------------------------------------------------------------------------------------------

    const handleSubmit = async (e, id)  => {
      e.preventDefault();
      const apiUrlValide = `https://okazy-production.up.railway.app/annonces/validate/${id}`;
      const requestOptions = {
        method: 'PUT',
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
                      <th>Valider</th>
                  </tr>
                </thead>
                <tbody>
                {annonces.map((annonce, index) => (
  <tr key={index}>
    <td>{annonce.utilisateur.nom}</td>
    <td>{annonce.voiture.marque.nom}</td>
    <td>{annonce.date}</td>
    <td>{annonce.titre}</td>
    <td>{annonce.description}</td>
    <td> <button className="btn btn-primary" onClick={(e) => handleSubmit(e, annonce.id)} > Valider </button> </td>
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

export default Validation;

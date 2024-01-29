import React, { useState, useEffect } from 'react';

function CassisM() {
    const token = localStorage.getItem('token');
  const apiUrlCassis = 'https://okazy-production.up.railway.app/cassiss';
    
    const [cassis, setCassis] = useState([]);
  
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
          const response = await fetch(apiUrlCassis, requestOptions);
          if (!response.ok) {
            throw new Error('La requête a échoué.');
          }
          const data = await response.json();
          setCassis(data.data);
        } catch (error) {
          console.error('Erreur lors de la requête à l\'API:', error);
        }
      };
  
      fetchData();
    }, [apiUrlCassis, token]); 

  const [nom , setNom] = useState('');
  const [idCassis , setIdCassis] = useState('');
  const handlerChangCassis = (event) => {
    const selectedValue = event.target.value;
    const selectedCassis = cassis.find((individualCassis) => individualCassis.nom === selectedValue);
    if (selectedCassis) {
      setNom(selectedCassis.nom);
      setIdCassis(selectedCassis.id);
    }
  };
  /////////////////////////////////////////////////////////////////////
  const handleSubmit = async (e , id) => {
    e.preventDefault();
    const apiUrlBoite = `https://okazy-production.up.railway.app/cassiss/${id}`;
    const requestOptions = {
      
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nom }),
    };
	
    try {
      const response = await fetch(apiUrlBoite, requestOptions);
		
      if (!response.ok) {
        throw new Error('La requête a échoué.');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API:', error);
    }
  };
  ///////////////////////////////////////////////////////////////////////////////////////
  const handleSuppre = async (e, id)  => {
    e.preventDefault();
    console.log(id)
    const apiUrlValide = `https://okazy-production.up.railway.app/cassiss/${id}`;
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
  return <>
  <div className="formbold-main-wrapper">
    <div className="formbold-form-wrapper">
        <div className="formbold-mb-3">
          <label className="formbold-form-label">Cassis</label>
            <select className="formbold-form-input" value={nom} onChange={handlerChangCassis}>
            {cassis.map((individualCassis, index) => (     
                <option  key={index} value={individualCassis.nom} >{individualCassis.nom}</option>
              ))}
            </select>
        </div>   
        <div className="formbold-input-wrapp formbold-mb-3">
            <label htmlFor="firstname" className="formbold-form-label"> Modifier </label>
            <div>
                <input type="text" name="fiscale" id="firstname" value={nom} className="formbold-form-input"  onChange={(e) => setNom(e.target.value)}/>
            </div>
          </div>  
        <div className="formbold-input-wrapp formbold-mb-3">
          <div>
            <button className="formbold-btn" onClick={(e) => handleSubmit(e, idCassis)} >Modifier</button>
            <button className="formbold-btn" onClick={(e) => handleSuppre(e, idCassis)} >Supprimer</button>
          </div>
        </div>
        
    </div>
  </div>
</>
}

export default CassisM

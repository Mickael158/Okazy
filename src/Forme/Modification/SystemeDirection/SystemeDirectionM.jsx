import React, { useState, useEffect } from 'react';

function SystemeDirectionM() {
  
    const token = localStorage.getItem('token');
    const apiUrlSystemeDirection = 'https://okazy-production.up.railway.app/systemdirections';
      
      const [systemeDirection, setSystemeDirection] = useState([]);
    
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
            const response = await fetch(apiUrlSystemeDirection, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setSystemeDirection(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlSystemeDirection, token]); 
  
    const [nom , setNom] = useState('');
    const [idsystemeDirection , setIdsystemeDirection] = useState('');
    const handlerChangModel = (event) => {
      const selectedValue = event.target.value;
      const selectedsystemeDirection = systemeDirection.find((individualsystemeDirection) => individualsystemeDirection.nom === selectedValue);
      if (selectedsystemeDirection) {
        setNom(selectedsystemeDirection.nom);
        setIdsystemeDirection(selectedsystemeDirection.id);
      }
    };
     
    
    ///////////////////////////////////////////////////////////////////////////////////
    const handleSubmit = async (e , id) => {
      e.preventDefault();
      const apiUrlsystemeDirection = `https://okazy-production.up.railway.app/systemdirections/${id}`;
      const requestOptions = {
        
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom }),
      };
      
      try {
        const response = await fetch(apiUrlsystemeDirection, requestOptions);
          
        if (!response.ok) {
          throw new Error('La requête a échoué.');
        }
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Erreur lors de la requête à l\'API:', error);
      }
    };
    ///////////////////////////////////////////////////////////////////////////////////
    const handleSuppre = async (e, id)  => {
      e.preventDefault();
      const apiUrlValide = `https://okazy-production.up.railway.app/systemdirections/${id}`;
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
    return<>
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
          <div className="formbold-mb-3">
            <label className="formbold-form-label">Systeme Direction</label>
              <select className="formbold-form-input" value={nom} onChange={handlerChangModel}>
              {systemeDirection.map((individualsystemeDirection, index) => (     
                  <option  key={index} value={individualsystemeDirection.nom} >{individualsystemeDirection.nom}</option>
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
              <button className="formbold-btn" onClick={(e) => handleSubmit(e, idsystemeDirection)} >Modifier</button>
              <button className="formbold-btn" onClick={(e) => handleSuppre(e, idsystemeDirection)} >Supprimer</button>
            </div>
          </div>
          
      </div>
    </div>
  </>
}

export default SystemeDirectionM

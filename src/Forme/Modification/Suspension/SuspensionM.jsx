import React, { useState, useEffect } from 'react';

function SuspensionM() {
  
    const token = localStorage.getItem('token');
    const apiUrlSuspension = 'https://okazy-production.up.railway.app/suspensions';
      
      const [suspension, setSuspension] = useState([]);
    
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
            const response = await fetch(apiUrlSuspension, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setSuspension(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlSuspension, token]); 
  
    const [nom , setNom] = useState('');
    const [idsuspension , setIdsuspension] = useState('');
    const handlerChangModel = (event) => {
      const selectedValue = event.target.value;
      const selectedsuspension = suspension.find((individualsuspension) => individualsuspension.nom === selectedValue);
      if (selectedsuspension) {
        setNom(selectedsuspension.nom);
        setIdsuspension(selectedsuspension.id);
      }
    };
     
    
    ///////////////////////////////////////////////////////////////////////////////////
    const handleSubmit = async (e , id) => {
      e.preventDefault();
      const apiUrlsuspension = `https://okazy-production.up.railway.app/suspensions/${id}`;
      const requestOptions = {
        
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom }),
      };
      
      try {
        const response = await fetch(apiUrlsuspension, requestOptions);
          
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
      const apiUrlValide = `https://okazy-production.up.railway.app/suspensions/${id}`;
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
            <label className="formbold-form-label">Suspension</label>
              <select className="formbold-form-input" value={nom} onChange={handlerChangModel}>
              {suspension.map((individualsuspension, index) => (     
                  <option  key={index} value={individualsuspension.nom} >{individualsuspension.nom}</option>
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
              <button className="formbold-btn" onClick={(e) => handleSubmit(e, idsuspension)} >Modifier</button>
              <button className="formbold-btn" onClick={(e) => handleSuppre(e, idsuspension)} >Supprimer</button>
            </div>
          </div>
          
      </div>
    </div>
  </>
}

export default SuspensionM

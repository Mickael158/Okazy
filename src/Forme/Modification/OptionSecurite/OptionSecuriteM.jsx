import React, { useState, useEffect } from 'react';

function OptionSecuriteM() {
    const token = localStorage.getItem('token');
    const apiUrlOptionSecurity = 'https://okazy-production.up.railway.app/optionsecurites';
      
      const [optionSecurite, setOptionSecurite] = useState([]);
    
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
            const response = await fetch(apiUrlOptionSecurity, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setOptionSecurite(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlOptionSecurity, token]); 
  
    const [nom , setNom] = useState('');
    const [idoptionSecurite , setIdoptionSecurite] = useState('');
    const handlerChangOptionSecurite = (event) => {
      const selectedValue = event.target.value;
      const selectedoptionSecurite = optionSecurite.find((individualoptionSecurite) => individualoptionSecurite.nom === selectedValue);
      if (selectedoptionSecurite) {
        setNom(selectedoptionSecurite.nom);
        setIdoptionSecurite(selectedoptionSecurite.id);
      }
    };
     
    
    ///////////////////////////////////////////////////////////////////////////////////
    const handleSubmit = async (e , id) => {
      e.preventDefault();
      const apiUrloptionSecurity = `https://okazy-production.up.railway.app/optionsecurites/${id}`;
      const requestOptions = {
        
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom }),
      };
      
      try {
        const response = await fetch(apiUrloptionSecurity, requestOptions);
          
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
      const apiUrlValide = `https://okazy-production.up.railway.app/optionsecurites/${id}`;
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
            <label className="formbold-form-label">Option Securite</label>
              <select className="formbold-form-input" value={nom} onChange={handlerChangOptionSecurite}>
              {optionSecurite.map((individualoptionSecurite, index) => (     
                  <option  key={index} value={individualoptionSecurite.nom} >{individualoptionSecurite.nom}</option>
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
              <button className="formbold-btn" onClick={(e) => handleSubmit(e, idoptionSecurite)} >Modifier</button>
              <button className="formbold-btn" onClick={(e) => handleSuppre(e, idoptionSecurite)} >Supprimer</button>
            </div>
          </div>
          
      </div>
    </div>
  </>
}

export default OptionSecuriteM

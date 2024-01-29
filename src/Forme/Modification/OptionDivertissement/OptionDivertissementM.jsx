import React, { useState, useEffect } from 'react';

function OptionDivertissementM() {
  
    const token = localStorage.getItem('token');
    const apiUrlOptionDivertissement = 'https://okazy-production.up.railway.app/optiondivertissements';
      
      const [optionDivertissement, setOptionDivertissement] = useState([]);
    
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
            const response = await fetch(apiUrlOptionDivertissement, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setOptionDivertissement(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlOptionDivertissement, token]); 
  
    const [nom , setNom] = useState('');
    const [idoptionDivertissement , setIdoptionDivertissement] = useState('');
    const handlerChangOptionDivertissement = (event) => {
      const selectedValue = event.target.value;
      const selectedoptionDivertissement = optionDivertissement.find((individualoptionDivertissement) => individualoptionDivertissement.nom === selectedValue);
      if (selectedoptionDivertissement) {
        setNom(selectedoptionDivertissement.nom);
        setIdoptionDivertissement(selectedoptionDivertissement.id);
      }
    };
     
    
    ///////////////////////////////////////////////////////////////////////////////////
    const handleSubmit = async (e , id) => {
      e.preventDefault();
      const apiUrloptionDivertissement = `https://okazy-production.up.railway.app/optiondivertissements/${id}`;
      const requestOptions = {
        
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom }),
      };
      
      try {
        const response = await fetch(apiUrloptionDivertissement, requestOptions);
          
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
      const apiUrlValide = `https://okazy-production.up.railway.app/optiondivertissements/${id}`;
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
            <label className="formbold-form-label">Option Divertissement</label>
              <select className="formbold-form-input" value={nom} onChange={handlerChangOptionDivertissement}>
              {optionDivertissement.map((individualoptionDivertissement, index) => (     
                  <option  key={index} value={individualoptionDivertissement.nom} >{individualoptionDivertissement.nom}</option>
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
              <button className="formbold-btn" onClick={(e) => handleSubmit(e, idoptionDivertissement)} >Modifier</button>
              <button className="formbold-btn" onClick={(e) => handleSuppre(e, idoptionDivertissement)} >Supprimer</button>
            </div>
          </div>
          
      </div>
    </div>
  </>
}

export default OptionDivertissementM

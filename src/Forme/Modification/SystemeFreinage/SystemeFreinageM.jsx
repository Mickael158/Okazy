import React, { useState, useEffect } from 'react';

function SystemeFreinageM() {
 
    const token = localStorage.getItem('token');
    const apiUrlSystemeFreinage = 'https://okazy-production.up.railway.app/systemfreinages';
      
      const [systemeFreinage, setSystemeFreinage] = useState([]);
    
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
            const response = await fetch(apiUrlSystemeFreinage, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setSystemeFreinage(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlSystemeFreinage, token]); 
  
    const [nom , setNom] = useState('');
    const [idsystemeFreinage , setIdsystemeFreinage] = useState('');
    const handlerChangModel = (event) => {
      const selectedValue = event.target.value;
      const selectedsystemeFreinage = systemeFreinage.find((individualsystemeFreinage) => individualsystemeFreinage.nom === selectedValue);
      if (selectedsystemeFreinage) {
        setNom(selectedsystemeFreinage.nom);
        setIdsystemeFreinage(selectedsystemeFreinage.id);
      }
    };
     
    
    ///////////////////////////////////////////////////////////////////////////////////
    const handleSubmit = async (e , id) => {
      e.preventDefault();
      const apiUrlsystemeFreinage = `https://okazy-production.up.railway.app/systemfreinages/${id}`;
      const requestOptions = {
        
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom }),
      };
      
      try {
        const response = await fetch(apiUrlsystemeFreinage, requestOptions);
          
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
      const apiUrlValide = `https://okazy-production.up.railway.app/systemfreinages/${id}`;
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
            <label className="formbold-form-label">Systeme Freinage</label>
              <select className="formbold-form-input" value={nom} onChange={handlerChangModel}>
              {systemeFreinage.map((individualsystemeFreinage, index) => (     
                  <option  key={index} value={individualsystemeFreinage.nom} >{individualsystemeFreinage.nom}</option>
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
              <button className="formbold-btn" onClick={(e) => handleSubmit(e, idsystemeFreinage)} >Modifier</button>
              <button className="formbold-btn" onClick={(e) => handleSuppre(e, idsystemeFreinage)} >Supprimer</button>
            </div>
          </div>
          
      </div>
    </div>
  </>
}

export default SystemeFreinageM

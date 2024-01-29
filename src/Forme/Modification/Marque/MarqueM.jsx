import React, { useState, useEffect } from 'react';

function MarqueM() {
    const token = localStorage.getItem('token');
    const apiUrlMarque = 'https://okazy-production.up.railway.app/marques';
      
      const [marque, setMarque] = useState([]);
    
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
            const response = await fetch(apiUrlMarque, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setMarque(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlMarque, token]); 
  
    const [nom , setNom] = useState('');
    const [idmarque , setIdmarque] = useState('');
    const handlerChangMarque = (event) => {
      const selectedValue = event.target.value;
      const selectedmarque = marque.find((individualmarque) => individualmarque.nom === selectedValue);
      if (selectedmarque) {
        setNom(selectedmarque.nom);
        setIdmarque(selectedmarque.id);
      }
    };
     
    
    ///////////////////////////////////////////////////////////////////////////////////
    const handleSubmit = async (e , id) => {
      e.preventDefault();
      const apiUrlmarque = `https://okazy-production.up.railway.app/marques/${id}`;
      const requestOptions = {
        
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom }),
      };
      
      try {
        const response = await fetch(apiUrlmarque, requestOptions);
          
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
      const apiUrlValide = `https://okazy-production.up.railway.app/marques/${id}`;
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
            <label className="formbold-form-label">marque</label>
              <select className="formbold-form-input" value={nom} onChange={handlerChangMarque}>
              {marque.map((individualmarque, index) => (     
                  <option  key={index} value={individualmarque.nom} >{individualmarque.nom}</option>
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
              <button className="formbold-btn" onClick={(e) => handleSubmit(e, idmarque)} >Modifier</button>
              <button className="formbold-btn" onClick={(e) => handleSuppre(e, idmarque)} >Supprimer</button>
            </div>
          </div>
          
      </div>
    </div>
  </>
}

export default MarqueM

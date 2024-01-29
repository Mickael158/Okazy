import React, { useState, useEffect } from 'react';

function ModelM() {
  
    const token = localStorage.getItem('token');
    const apiUrlModel = 'https://okazy-production.up.railway.app/models';
      
      const [modele, setModele] = useState([]);
    
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
            const response = await fetch(apiUrlModel, requestOptions);
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            const data = await response.json();
            setModele(data.data);
          } catch (error) {
            console.error('Erreur lors de la requête à l\'API:', error);
          }
        };
    
        fetchData();
      }, [apiUrlModel, token]); 
  
    const [nom , setNom] = useState('');
    const [idmodele , setIdmodele] = useState('');
    const handlerChangModel = (event) => {
      const selectedValue = event.target.value;
      const selectedmodele = modele.find((individualmodele) => individualmodele.nom === selectedValue);
      if (selectedmodele) {
        setNom(selectedmodele.nom);
        setIdmodele(selectedmodele.id);
      }
    };
     
    
    ///////////////////////////////////////////////////////////////////////////////////
    const handleSubmit = async (e , id) => {
      e.preventDefault();
      const apiUrlmodele = `https://okazy-production.up.railway.app/models/${id}`;
      const requestOptions = {
        
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom }),
      };
      
      try {
        const response = await fetch(apiUrlmodele, requestOptions);
          
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
      const apiUrlValide = `https://okazy-production.up.railway.app/models/${id}`;
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
            <label className="formbold-form-label">modele</label>
              <select className="formbold-form-input" value={nom} onChange={handlerChangModel}>
              {modele.map((individualmodele, index) => (     
                  <option  key={index} value={individualmodele.nom} >{individualmodele.nom}</option>
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
              <button className="formbold-btn" onClick={(e) => handleSubmit(e, idmodele)} >Modifier</button>
              <button className="formbold-btn" onClick={(e) => handleSuppre(e, idmodele)} >Supprimer</button>
            </div>
          </div>
          
      </div>
    </div>
  </>
}

export default ModelM

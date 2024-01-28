import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SystemeFreinage() {
    const navigate = useNavigate();
    const apiUrl = 'https://okazy-production.up.railway.app/systemfreinages';
    const token = localStorage.getItem('token');
    
    const [nom, setNom] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom }),
      };
      
      try {
        const response = await fetch(apiUrl, requestOptions);
          
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
          <img src="your-image-url-here.jpg" alt="Your Alt Text" />
          <form onSubmit={handleSubmit}>
            <div className="formbold-input-wrapp formbold-mb-3">
              <label htmlFor="firstname" className="formbold-form-label"> Systeme Freinage </label>
              <input
                type="text"
                className="formbold-form-input"
                placeholder="Systeme Freinage"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <button className="formbold-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
}

export default SystemeFreinage

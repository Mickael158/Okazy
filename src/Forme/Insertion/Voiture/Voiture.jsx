import React, { useState, useEffect } from 'react';
function Voiture() {
  const apiUrl = 'https://okazy-production.up.railway.app/marques';
  const token = localStorage.getItem('token');

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
        const response = await fetch(apiUrl, requestOptions);
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
  }, [apiUrl, token]);
  const [idMarque , setIdMarque] = useState('');

    const handlerChangMarque = (event) => {
        setIdMarque(event.target.value);
        
    }
   /* ---------------------------------------------------------------------------------------------------------- */
    const apiUrlModel = 'https://okazy-production.up.railway.app/models';
    
    const [model, setModel] = useState([]);
  
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
          setModel(data.data);
        } catch (error) {
          console.error('Erreur lors de la requête à l\'API:', error);
        }
      };
  
      fetchData();
    }, [apiUrlModel, token]); 
    const [idModel , setIdModel] = useState('');
    const handlerChangModel = (event) => {
        setIdModel(event.target.value);
    } 
    /* ---------------------------------------------------------------------------------------------------------- */
    const apiUrlCassis = 'https://okazy-production.up.railway.app/cassiss';
    const [cassi, setCassis] = useState([]);
  
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
    const [idCassis , setIdCassis] = useState('');
    const handlerChangCassis = (event) => {
      setIdCassis(event.target.value);
  } 
    /* ---------------------------------------------------------------------------------------------------------- */
  const apiUrlVoitures = 'https://okazy-production.up.railway.app/voitures';

  const [puissancefiscale , setPuissancefiscale] = useState('');
  const [cylindre, setCylindre] = useState('');
  const [puissancemoteur, setPuissancemoteur] = useState('');
  const [nombreporte, setNombreporte] = useState('');
  const [nombreplace, setNombreplace] = useState('');
  const [miseencirculation, setMiseencirculation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
	

    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "marque": {
          "id":idMarque
        },
        "model":{
          "id": idModel
        },
        "puissancefiscale":puissancefiscale,
        "cylindre":cylindre,
        "puissancemoteur":puissancemoteur,
        "cassis":{
          "id":idCassis
        },
        "nombreporte":nombreporte,
        "nombreplace":nombreplace,
        "miseencirculation":miseencirculation
      }),
    };
	
    try {
      const response = await fetch(apiUrlVoitures, requestOptions);
		
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
        <form onSubmit={handleSubmit}>
          <div className="formbold-mb-3">
            <label className="formbold-form-label">Marque</label>
              <select className="formbold-form-input" value={idMarque} onChange={handlerChangMarque}>
              {marque.map((individualMarque, index) => (
                      <option key={index} value={individualMarque.id}>
                        {individualMarque.nom}
                      </option>
                    ))}
              </select>
          </div>
          <div className="formbold-mb-3">
            <label className="formbold-form-label">Model</label>
              <select className="formbold-form-input" value={idModel} onChange={handlerChangModel}>
              {model.map((individualModel, index) => (
                      <option key={index} value={individualModel.id}>
                        {individualModel.nom}
                      </option>
                    ))}
              </select>
          </div>
          <div className="formbold-input-wrapp formbold-mb-3">
            <label htmlFor="firstname" className="formbold-form-label"> Puissance </label>
            <div>
                <input type="number" name="fiscale" id="firstname" placeholder="Fiscale" className="formbold-form-input" value={puissancefiscale} onChange={(e) => setPuissancefiscale(e.target.value)}/>
                <input type="number" name="moteur" id="lastname" placeholder="Moteur" className="formbold-form-input" value={puissancemoteur} onChange={(e) => setPuissancemoteur(e.target.value)}/>
                <input type="number" name="cylindre" id="lastname" placeholder="Cylindre" className="formbold-form-input" value={cylindre} onChange={(e) => setCylindre(e.target.value)}/>
            </div>
          </div>
          <div className="formbold-mb-3">
            <label className="formbold-form-label">Cassis</label>
              <select className="formbold-form-input" value={idCassis} onChange={handlerChangCassis}>
              {cassi.map((individualCassis, index) => (
                      <option key={index} value={individualCassis.id}>
                        {individualCassis.nom}
                      </option>
                    ))}
              </select>
          </div>   
          <div className="formbold-input-wrapp formbold-mb-3">
            <label htmlFor="firstname" className="formbold-form-label"> Caracteristique </label>
            <div>
                <input type="number" name="porte" id="firstname" placeholder="Porte" className="formbold-form-input" value={nombreporte} onChange={(e) => setNombreporte(e.target.value)}/>
                <input type="number" name="place" id="lastname" placeholder="Place" className="formbold-form-input" value={nombreplace} onChange={(e) => setNombreplace(e.target.value)}/>
            </div>
          </div>  
          <div className="formbold-input-wrapp formbold-mb-3">
            <label htmlFor="firstname" className="formbold-form-label"> Mise en circulation </label>
            <div>
                <input type="date" name="place" id="lastname"  className="formbold-form-input" value={miseencirculation} onChange={(e) => setMiseencirculation(e.target.value)}/>
            </div>
          </div>     
          <button className="formbold-btn">Submit</button>
        </form>
      </div>
    </div>
  </>
  
}

export default Voiture;

import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export function Login() {

	const navigate = useNavigate();
  const apiUrl = 'https://okazy-production.up.railway.app/authentication/login';
  
  const [username, setUsername] = useState('bobman');
  const [password, setPassword] = useState('123456');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer `,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    };
	
    try {
      const response = await fetch(apiUrl, requestOptions);
		
      if (!response.ok) {
        throw new Error('La requête a échoué.');
      }

      const data = await response.json();
	  localStorage.removeItem('token');
	  localStorage.setItem('token' , data.data);
	  navigate('/Accueil');
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API:', error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="User name / Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>

    </>
  );
}

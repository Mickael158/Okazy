import React, { useState } from 'react'
import './vendor/bootstrap/css/bootstrap.min.css'
import './style.css'
import Marque from './Marque/Marque';
import Boite from './Boite/Boite';
import Cassis from './Cassis/Cassis';
import Modele from './Modele/Modele';
import OptionDivertissements from './OptionDivertissement/OptionDivertissement'
import OptionSecurite from './OptionSecurite/OptionSecurite';
import SourceEnergie from './SourceEnergie/SourceEnergie';
import Suspension from './Suspension/Suspension';
import SystemeDirection from './SystemeDirection/SystemeDirection';
import SystemeFreinage from './SystemeFreinage/SystemeFreinage';
import Voiture from './Voiture/Voiture';

function Insertion() {
    const [insert,setInsert] = useState(0);
  return <>
    <div className="cardBox">
        <span onClick={()=>{
                            setInsert(0);
                        }}>
            <div className="card">
                <div>
                    <div className="name">Marque</div>
                </div>

                <div className="iconBx">
                    <ion-icon name="eye-outline"></ion-icon>
                </div>
            </div>
        </span>
        
        <span onClick={()=>{
                            setInsert(1);
                        }}>
            <div className="card">
            <div>
                <div className="name">Boite de Vitesse</div>
            </div>

            <div className="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div>
        </span>  

        <span onClick={()=>{
                            setInsert(2);
                        }}>
            <div className="card">
            <div>
                <div className="name">Cassi</div>
            </div>

            <div className="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div>
        </span>                     
        
        <span onClick={()=>{
                            setInsert(3);
                        }}>
            <div className="card">
            <div>
                <div className="name">Modele</div>
            </div>

            <div className="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div>
        </span> 

        <span onClick={()=>{
                            setInsert(4);
                        }}>
            <div className="card">
            <div>
                <div className="name">Option Divertissements </div>
            </div>

            <div className="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div>
        </span>

        <span onClick={()=>{
                            setInsert(5);
                        }}>
            <div className="card">
            <div>
                <div className="name">Option Security </div>
            </div>

            <div className="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div>
        </span>

        <span onClick={()=>{
                            setInsert(6);
                        }}>
            <div className="card">
            <div>
                <div className="name">Source Energie</div>
            </div>

            <div className="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div>
        </span>

        <span onClick={()=>{
                            setInsert(7);
                        }}>
            <div className="card">
            <div>
                <div className="name">Suspension</div>
            </div>

            <div className="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div>
        </span>
        <span onClick={()=>{
                            setInsert(8);
                        }}>
            <div className="card">
            <div>
                <div className="name">systeme Directions</div>
            </div>

            <div className="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div>
        </span>
        <span onClick={()=>{
                            setInsert(9);
                        }}>
            <div className="card">
            <div>
                <div className="name">systeme Freinage</div>
            </div>

            <div className="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div>
        </span>
        <span onClick={()=>{
                            setInsert(10);
                        }}>
            <div className="card">
            <div>
                <div className="name">Voiture</div>
            </div>

            <div className="iconBx">
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div>
        </span>
        
        
    </div>
    {insert === 0 && <Marque/>}
    {insert === 1 && <Boite/>}
    {insert === 2 && <Cassis/>}
    {insert === 3 && <Modele/>}
    {insert === 4 && <OptionDivertissements/>}
    {insert === 5 && <OptionSecurite/>}
    {insert === 6 && <SourceEnergie/>}
    {insert === 7 && <Suspension/>}
    {insert === 8 && <SystemeDirection/>}
    {insert === 9 && <SystemeFreinage/>}
    {insert === 10 && <Voiture/>}
    {/* <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
            <img src="your-image-url-here.jpg"/>
            <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="formbold-input-wrapp formbold-mb-3">
                    <label for="firstname" class="formbold-form-label"> Name </label>

                    <div>
                        <input type="text" name="firstname" id="firstname" placeholder="First name" class="formbold-form-input" />
                        <input type="text" name="lastname" id="lastname" placeholder="Last name" class="formbold-form-input" />
                    </div>
                </div>

                <div class="formbold-mb-3">
                    <label for="age" class="formbold-form-label"> Age </label>
                    <input type="text" name="age" id="age" placeholder="ex:25" class="formbold-form-input" />
                </div>

                <div class="formbold-mb-3">
                    <label for="dob" class="formbold-form-label"> Date of Birth </label>
                    <input type="date" name="dob" id="dob" class="formbold-form-input" />
                </div>

                <div class="formbold-mb-3">
                    <label class="formbold-form-label">Gender</label>

                    <select class="formbold-form-input" name="occupation" id="occupation">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div class="formbold-mb-3">
                    <label for="email" class="formbold-form-label"> Email </label>
                    <input type="email" name="email" id="email" placeholder="example@email.com" class="formbold-form-input" />
                </div>

                <div class="formbold-mb-3">
                    <label for="address" class="formbold-form-label"> Address </label>
                    <input type="text" name="address" id="address" placeholder="Street address"  class="formbold-form-input formbold-mb-3" />
                    <input type="text" name="address2" id="address2" placeholder="Street address line 2" class="formbold-form-input" />
                </div>

                <div class="formbold-mb-3 formbold-input-wrapp">
                    <label for="phone" class="formbold-form-label"> Phone </label>

                    <div>
                        <input id="areacode" placeholder="Area code" class="formbold-form-input formbold-w-45" />
                        <input type="text" name="phone" id="phone" placeholder="Phone number" class="formbold-form-input" />
                    </div>
                </div>

                <div class="formbold-input-flex">
                    <div>
                        <label for="post" class="formbold-form-label"> Post/Zip code </label>
                        <input type="text" name="post" id="post" placeholder="ex:8976"  class="formbold-form-input" />
                    </div>
                    <div>
                        <label for="city" class="formbold-form-label"> City </label>
                        <input type="text" name="city" id="city" placeholder="ex: New York" class="formbold-form-input" />
                    </div>
                </div>

                <div class="formbold-mb-3">
                    <label for="upload" class="formbold-form-label">Upload Signature </label>
                    <input type="file" name="upload" id="upload" class="formbold-form-input formbold-form-file" />
                </div>

                <div class="formbold-checkbox-wrapper">
                    <label for="supportCheckbox" class="formbold-checkbox-label">
                        <div class="formbold-relative">
                            <input type="checkbox" id="supportCheckbox" class="formbold-input-checkbox" />
                            <div class="formbold-checkbox-inner">
                                <span class="formbold-opacity-0">
                                    <svg width="11" height="8" viewBox="0 0 11 8" class="formbold-stroke-current" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M8.81868 0.688604L4.16688 5.4878L2.05598 3.29507C1.70417 2.92271 1.1569 2.96409 0.805082 3.29507C0.453266 3.66742 0.492357 4.24663 0.805082 4.61898L3.30689 7.18407C3.54143 7.43231 3.85416 7.55642 4.16688 7.55642C4.47961 7.55642 4.79233 7.43231 5.02688 7.18407L10.0696 2.05389C10.4214 1.68154 10.4214 1.10233 10.0696 0.729976C9.71776 0.357624 9.17049 0.357625 8.81868 0.688604Z" fill="white"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        I agree to the defined <a href="#"> terms, conditions, and policies</a>
                    </label>
                </div>
                <button class="formbold-btn">Submit</button>
            </form>
        </div>
    </div> */}
  </>
}

export default Insertion


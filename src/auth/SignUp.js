/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 19/05/2022 - 07:53:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/05/2022
    * - Author          : 
    * - Modification    : 
**/


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//import  'bootstrap/dist/css/bootstrap.css';

export const SignUp = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [signingIn, setSigningIn] = useState(false);
  const [password, setPassword] = useState({authDetails: ''});
  const [viewPassword, setViewPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState([]);
  const [passwordStrengthAlternate, setPasswordStrengthAlternate] = useState([]);
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword({...password});
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  useEffect((prev)=>{
    setPasswordStrength(getPasswordStrength())
},[password.authDetails])

useEffect((prev)=>{
  setPassword({...prev, authDetails: 'Enter your password'})
},[])

  const getPasswordStrength = () => {
    const authDetails = password.authDetails;
    const minLength = authDetails?.length > 8;
    const hasDigit = /\d/.test(authDetails);
    const hasSpecialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(authDetails);
    const hasUpperCase = authDetails?.toLowerCase() !== authDetails;
    let strength = [];
    let alternate = [];

    if (hasDigit) {
      strength.push(1)
    }
    if (hasSpecialChar) {
      strength.push(1);
    }
    if (hasUpperCase) {
      strength.push(1);
    }
    if (minLength) {
      strength.push(1);
    }

    for (let i = 0; i < 4 - strength.length; i++) {
      alternate.push(1);
    }

    setPasswordStrengthAlternate(alternate);
    return strength;
}

const handleShowPassword = () => {
  setViewPassword((previousValue) => !previousValue);
};



  return (
    <div className="form ">
      <div>
        <h2 className='reg'>User Registration</h2>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form className='signup-form'>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input 
        onChange={handleName} 
        className="input"
        value={name} 
        required
        type="text" />
 
        <label className="label">Email</label>
        <input
        type="email"
        onChange={handleEmail} 
        className="input"
        value={email} 
        required
         />

        <div className='password-group'>
        <label className="label">Password</label>
        <input onChange={handlePassword} 
        className="input"
         
          required
          type={viewPassword ? 'text' : 'password'}/>
          <span
                                onClick={handleShowPassword}
                                className="show-password btn"
                            >
                                {!viewPassword ? (
                                    <i className="fa fa-eye-slash"></i>
                                ) : (
                                    <i className="fa fa-eye"></i>
                                )}
                            </span>
                            </div>
  <div className='password-group'>
       <label className="label">Confirm Password</label>
        <input onChange={handlePassword} 
        className="input"
          required
          type={viewPassword ? 'text' : 'password'} />
          <span
                                onClick={handleShowPassword}
                                className="show-password btn"
                            >
                                {!viewPassword ? (
                                    <i className="fa fa-eye-slash"></i>
                                ) : (
                                    <i className="fa fa-eye"></i>
                                )}
                            </span>
          </div>

          <div className="passwordBars">
                            {
                                passwordStrength.map( () => <div className='pBar' style={{background: passwordStrength.length < 4 ? '#d14343' : '#008138'}}></div>)
                            }
                            {
                                passwordStrengthAlternate.map( () => <div className='pBar' style={{background: '#D8E0E7'}}></div>)
                            }
                        </div>


        <button onClick={handleSubmit} className="btn-btn" type="submit">
          Sign Up
        </button>
        <p style={{textAlign: 'center'}}><small>Do have an account already? <Link className='auth-a' to="/signin">Login</Link></small></p>
      </form>
    </div>
  )
}



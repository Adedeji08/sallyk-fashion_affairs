/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 19/05/2022 - 07:30:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/05/2022
    * - Author          : 
    * - Modification    : 
**/
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
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
  return (
    <div className="form ">
      <div>
        <h2 className='reg'>Login To Your Account</h2>
        <h6 className='reg'>Welcome back. Please enter your login details</h6>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
      </div>
 
      <form className='signup-form'>
 
        <label className="label">Email</label>
        <input
        type="email"
        onChange={handleEmail} 
        className="input"
        value={email} 
        required
         />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} 
        className="input"
          value={password} 
          required
          type="password" />

        <button onClick={handleSubmit} className="btn" type="submit">
          Login
        </button>
        <p style={{textAlign: 'center'}}><small>Don't have an account? <Link className='auth-a' to="/">Sign Up</Link></small></p>
      </form>
    </div>
  )
}

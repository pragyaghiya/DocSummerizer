import React from 'react';
import { useState,useEffect } from 'react';
import fire from './fire';

const Login =(props) =>{
    const{
        user,setUser
        }=props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(true);
  
    const clearErrors =() =>{
      setEmailError('');
      setPasswordError('');
    }
  
    const clearInputs =() =>{
      setEmail('');
      setPassword('');
    }
  
    const handleLogin = () => {
      clearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email, password) //what is this bachhin with email & password right? ha ok lol
        .catch((err) => {
          switch (err.code) {
            case "auth/Invalid-email":
            case "auth/user-disable":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          }
        });
    };

  
        const handleSignup = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/Invalid-email":
              setEmailError(err.message);
              break;
              case "auth/weak-password":
                setPasswordError(err.message);
                break;
          }
        });
      };
  
       
  
      const authListner = () => {
        fire.auth().onAuthStateChanged((user) =>{
          if(user){
            clearInputs();
            setUser(user);
          }else{
            setUser();
          }
        });
  };
  useEffect(() =>{
    authListner();
  },[user]);

    
    return (
      <section className="login">
        <div className="loginContainer">
          <label>Email</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>

          <div className="btnContainer">
            {hasAccount ? (
              <div>
                <button onClick={handleLogin}>Sign in</button>

                <p>
                  Don't have an account?{" "}
                  <span onClick={() => setHasAccount(false)}>Sign up</span>
                </p>
              </div>
            ) : (
              <div>
                <button
                  style={{ backgroundColor: "blueviolet" }}
                  onClick={handleSignup}
                >
                  Sign up
                </button>
                <p>
                  Have an account?{" "}
                  <span onClick={() => setHasAccount(true)}>Sign in</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
}
export default Login;
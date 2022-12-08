import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../auth";

export default function SplashScreen() {
  const { auth } = useContext(AuthContext);
  const history = useHistory();

  function handleRegister() {
    history.push("/register/");
  }

  function handleLogin() {
    history.push("/login/");
  }

  function handleLoginAsGuest() {
    history.push("/allList/");
    auth.loginAsGuest();
  }

  return (
    <div id='splash-screen'>
      <img src='../../playlister-logo.png' alt='playlister'/>
      <h1>Welcome to the Playlister App</h1>
      <p>
        Creat your own playlist and Play It With YouTube!
        
      </p>
      <div id='splash-screen-button'>
        <button
          className='button'
          id='register-button'
          type='button'
          onClick={handleRegister}
        >
          REGISTER
        </button>
        <button className='button' id='login-button' type="button" onClick={handleLogin}>
          LOGIN
        </button>
        <button className='button' id='guess-button' type="button" onClick={handleLoginAsGuest}>
          GUEST
        </button>
      </div>
    </div>
  );
}

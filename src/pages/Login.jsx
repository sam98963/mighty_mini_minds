import logo from "../Img/logo-close.png"
import { NavLink } from 'react-router-dom';




export default function Login() {
  return (
    <div className="flex flex-col items-center justify-around h-screen">
    <img src= {logo} alt="logo" className="h-28 w-44"/>
      <div>
      <h1>Mighty Mini Minds</h1>
       <p>“I’m enough as I am.” - Boy</p>
        <p>The Boy, The Mole, The Fox, and The Horse, by by Charlie Mackesy</p>
      </div>
      <div className="flex flex-col">
     <label>username</label>
     <input type="text" />
     <label>password</label>
     <input type="text" />
      <button>login</button>
     </div>
     <NavLink to="./SignUp.jsx">No account? Sign up here!</NavLink>
    </div>
  );
}
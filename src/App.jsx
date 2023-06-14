import { useState } from 'react';
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";  
import Journal from "./pages/Journal";
import MoodMap from "./pages/MoodMap";
import AddEntry from "./pages/AddEntry";
import WelcomePage from './pages/WelcomePage';
import ThanksPage from './pages/ThanksPage';


function App() {
  const [theme, setTheme] = useState("");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };
  // set up nested router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />}>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        
        <Route path="appLayout" element={<AppLayout handleThemeChange={handleThemeChange} />}>
          <Route path="journal" element={<Journal />} />
          <Route path="moodMap" element={<MoodMap />} />
          <Route path="addEntry" element={<AddEntry />} />
          <Route path="welcomePage" element={<WelcomePage />} />
          <Route path="thanksPage" element={<ThanksPage />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className={`bg-skin-base ${theme} min-h-screen overflow-hidden`}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

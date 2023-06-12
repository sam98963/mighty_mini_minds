import './App.css'
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
import Page1 from "./pages/Page1";  
import Page2 from "./pages/Page2";
import Journal from "./pages/Journal";
import MoodMap from "./pages/MoodMap";
import AddEntry from "./pages/AddEntry";
import { useState } from 'react';
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
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="journal" element={<Journal />} />
          <Route path="moodMap" element={<MoodMap />} />
          <Route path="addEntry" element={<AddEntry />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className={`bg-skin-base ${theme} min-h-screen`}>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;

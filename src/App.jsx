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
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />}>
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="appLayout" element={<AppLayout />}>
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Route>
      </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
  )
}

export default App;

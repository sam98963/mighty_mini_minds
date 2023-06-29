import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import AppLayout from "./pages/AppLayout";
import Journal from "./pages/Journal";
import MoodMap from "./pages/MoodMap";
import AddEntry from "./pages/AddEntry";
import WelcomePage from "./pages/WelcomePage";
import ThanksPage from "./pages/ThanksPage";
import ProfilePage from "./pages/ProfilePage";
import About from "./pages/About";
import ProtectedRoutes from "./ProtectedRoute";
import { AuthProvider } from "./auth/AuthProvider";

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
        <Route path="profile" element={<ProfilePage />} />
        <Route path="about" element={<About />} />
        {/* protected routes by atuh goes here wrappep by ProtectedRoutes*/}
        <Route element={<ProtectedRoutes />}>
          <Route
            path="appLayout"
            element={<AppLayout handleThemeChange={handleThemeChange} />}
          >
            <Route path="journal" element={<Journal />} />
            <Route path="moodMap" element={<MoodMap />} />
            <Route path="addEntry" element={<AddEntry />} />
            <Route path="welcomePage" element={<WelcomePage />} />
            <Route path="thanksPage" element={<ThanksPage />} />
          </Route>
        </Route>
      </Route>
    )
  );
  // set up react-query
  const queryClient = new QueryClient();

  return (
    <div className={`bg-skin-base ${theme} min-h-screen overflow-hidden`}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

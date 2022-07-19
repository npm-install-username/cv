import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Profile from "./pages/Profile";
import CVBuilder from "./pages/CVBuilder";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase-config";
import Register from "./pages/Register";
import Login from "./pages/Login"

const RouteSwitch = () => {
  const [user, setUser] = useState({});
  
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

  }, [])
  return (
    <BrowserRouter>
    <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {user ? <Route path="/profile" element={<Profile />} /> : <Route path="/profile" element={<Navigate to='/' />} /> }
        {user ? <Route path="/cvbuilder" element={<CVBuilder />} /> : <Route path="/cvbuilder" element={<Navigate to='/' />} /> }
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
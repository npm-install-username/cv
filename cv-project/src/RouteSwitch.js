import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./pages/Profile";
import CVBuilder from "./pages/CVBuilder";
import Navbar from "./pages/Navbar";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cvbuilder" element={<CVBuilder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./components/Profile";
import CVBuilder from "./components/CVBuilder";
import Navbar from "./components/Navbar";

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
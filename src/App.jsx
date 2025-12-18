import Home from "./Pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Hotels from "./Pages/Hotels";
import HotelDetails from "./Pages/HotelDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/hotels/:id" element={<HotelDetails />} />
    </Routes>
  );
}

export default App;
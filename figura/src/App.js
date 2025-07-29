import "./App.css";
import { Routes, Route } from "react-router";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Menu from "./Pages/Menu";
import Logout from "./Logout";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </div>
  );
}

export default App;

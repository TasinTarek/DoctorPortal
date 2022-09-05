import './App.css';
import Navigation from './Pages/Shared/Navigation/Navigation';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
function App() {
  return (
  <div>
     <Navigation></Navigation>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="about" element={<About />} />
   <Route path="login" element={<Login />} />
   <Route path="register" element={<Register />} />
 </Routes>
  </div>
  );
}

export default App;

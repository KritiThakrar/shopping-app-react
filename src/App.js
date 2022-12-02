// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App()
{
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<Home />}> */}
                    <Route index element={<Home />} />
                    <Route exact path="shop" element={<Shop />} />
                    <Route exact path="about" element={<About />} />
                    <Route exact path="contact" element={<Contact />} />
                    <Route exact path="login" element={<Login />} />
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

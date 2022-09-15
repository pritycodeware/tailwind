import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import {Routes , Route } from 'react-router-dom'
function App() {
  return (
        <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route path="*" element={<h1>404 Not Found </h1>}/>


    </Routes>
  );
}




export default App;

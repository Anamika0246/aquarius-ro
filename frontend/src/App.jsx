import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import UserLogin from './pages/Auth/UserLogin.jsx';
import { ThemeProvider } from './components/ThemeContext.jsx'; // Change this line

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<div className="container mx-auto p-4">Profile Page</div>} />
            <Route path="/logout" element={<div className="container mx-auto p-4">Logging Out...</div>} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
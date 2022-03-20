import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Pages />
          <Footer/>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;

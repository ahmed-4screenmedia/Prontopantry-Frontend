import "./App.css";
import Login from "./Components/Login";
import TermsOfService from "./Components/TermsOfService";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Downloads from "./Components/Downloads";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/termsOfservice" element={<TermsOfService />} />
          <Route path="/download" element={<Downloads />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

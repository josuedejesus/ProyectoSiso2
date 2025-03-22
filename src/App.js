import logo from './logo.svg';
import './App.css';
import TokenGenerator from './pages/TokenGenerator';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TokenGenerator/>} />

      </Routes>
    </Router>
  );
}

export default App;

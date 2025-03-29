import './App.css';
import TokenGenerator from './pages/TokenGenerator';
import Main from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Token" element={<TokenGenerator/>} />

      </Routes>
    </Router>
  );
}

export default App;

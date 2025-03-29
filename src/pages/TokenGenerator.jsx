import React, { useState } from "react";
import axios from "axios";
import "../styles/Token.css";


const TokenGenerator = () => {
  const [token, setToken] = useState("");
  const [copied, setCopied] = useState(false);

  const fetchToken = async () => {
    axios.get("http://localhost/index.php")
    .then((response) => {
      console.log(response.data.token);
      setTimeout(() => {
        setToken("");
      }, 8000);
      setToken(response.data.token)
    })
    .catch((error) => {

    })

  };

  const handleCopy = () => {

  }

  return (
    <div className="card">
      <h2 className="title">🔐 Generador de Token</h2>

      <div className="inputGroup">
        <input
          readOnly
          value={token}
          placeholder="Tu token aparecera aqui..."
          className="input"
        />
        <button onClick={handleCopy} disabled={!token} className="copyButton">
          📋
        </button>
      </div>

      <button onClick={fetchToken} className="generateButton">
        🔄 Generar Token
      </button>

      {copied && <p className="copied">✅ Token copied!</p>}
    </div>
  );
};

export default TokenGenerator;

import React, { useState } from "react";
import axios from "axios";


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
    <div style={styles.card}>
      <h2 style={styles.title}>🔐 Generador de Token</h2>

      <div style={styles.inputGroup}>
        <input
          readOnly
          value={token}
          placeholder="Tu token aparecera aqui..."
          style={styles.input}
        />
        <button onClick={handleCopy} disabled={!token} style={styles.copyButton}>
          📋
        </button>
      </div>

      <button onClick={fetchToken} style={styles.generateButton}>
        🔄 Generar Token
      </button>

      {copied && <p style={styles.copied}>✅ Token copied!</p>}
    </div>
  );
};

const styles = {
  card: {
    maxWidth: "400px",
    margin: "5rem auto",
    padding: "2rem",
    borderRadius: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  inputGroup: {
    display: "flex",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  input: {
    flex: 1,
    padding: "0.5rem",
    borderRadius: "0.5rem",
    border: "1px solid #ccc",
  },
  copyButton: {
    padding: "0.5rem 0.75rem",
    borderRadius: "0.5rem",
    backgroundColor: "#eee",
    border: "none",
    cursor: "pointer",
  },
  generateButton: {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  copied: {
    marginTop: "1rem",
    color: "green",
  },
};

export default TokenGenerator;

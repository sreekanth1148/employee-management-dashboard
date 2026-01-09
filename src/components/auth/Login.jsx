import React from "react";

export default function Login({ onLogin }) {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Employee Dashboard</h2>
        <p style={styles.subtitle}>Please login to continue</p>
        <button style={styles.button} onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#cfeee8",
  },
  card: {
    background: "#fff",
    padding: "30px 40px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    minWidth: "280px",
  },
  title: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "600",
  },
  subtitle: {
    margin: "10px 0 20px",
    fontSize: "14px",
    color: "#666",
  },
  button: {
    padding: "8px 24px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

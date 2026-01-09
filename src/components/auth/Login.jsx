import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="page">
      <div className="card">
        <h2>Employee Dashboard</h2>
        <p>Please login to continue</p>

        <button onClick={login} className="btn login">
          Login
        </button>
      </div>
    </div>
  );
}

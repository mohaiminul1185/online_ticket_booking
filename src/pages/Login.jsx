import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleLogin}
        className="border p-10 rounded-lg w-[450px]"
      >
        <h2 className="text-5xl font-bold text-center mb-8">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border w-full p-3 mb-4 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border w-full p-3 mb-4 rounded"
        />

        <button className="btn btn-primary w-full">
          Login
        </button>

        <p className="text-red-500 mt-3">
          {error}
        </p>
      </form>
    </div>
  );
};

export default Login;
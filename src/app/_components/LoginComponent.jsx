import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const router=useRouter()

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("All Fields are Required !", {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
      });
      return false;
    }
    let response = await fetch("http://localhost:3000/api/restaurents", {
      method: "POST",
      body: JSON.stringify({ email, password, login: true }),
    });
    response = await response.json();
    if (response.success) {
      toast.success("Logged In Successfully", {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
      });

      const { result } = response;
      delete result.password;
      localStorage.setItem("RestuarentUser", JSON.stringify(result));
      router.push("/restaurent/dashboard");
    } else {
      toast.error("Invalid Credentials", {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
      });
    }
  };

  return (
    <div className="login-design">
      <ToastContainer />
      <h1>Login</h1>
      <div className="login-input">
        <input
          type="text"
          placeholder="Email Id"
          className="input-text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;

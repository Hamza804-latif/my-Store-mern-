import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Login = async () => {
    try {
      if (email && password) {
        let res = await axios.post("http://localhost:5000/login", {
          data: JSON.stringify({ email, password }),
        });
        let result = res.data;
        localStorage.setItem("token", JSON.stringify(result.token));
        console.log(result.token);
        navigate("/");
      } else {
        alert("Please provide email and password");
      }
    } catch (err) {
      console.log("error login", err.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={Login}>Login</button>
    </div>
  );
};

export default Index;

import axios from "axios";
import React from "react";
import { useState } from "react";

const Index = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Signup = async () => {
    try {
      let resp = await axios.post("http://localhost:5000/signup", {
        data: { username, email, password },
      });
      console.log(resp.data);
    } catch (err) {
      console.log("signup error", err.message);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="passwod"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={Signup}>Signup</button>
    </div>
  );
};

export default Index;

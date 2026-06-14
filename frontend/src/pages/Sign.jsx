import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/signup", {
        name,
        email,
        password,
      });
      setName("");
      setEmail("");
      setPassword("");
      console.log(response.data);
      setMessage("Signup Successful");
      navigate("/Login");
    } catch (error) {
      console.log(error.response);
      console.log(error.response?.data);
    }
  };
  return (
    <>
      <label>Name</label>{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label>Email</label>{" "}
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSignup}>Signup</button>
      <p>{message}</p>
    </>
  );
};

export default Sign;

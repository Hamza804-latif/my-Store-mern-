import axios from "axios";
import React from "react";
import { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Index = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();

  const Signup = async () => {
    if (username && email && password) {
      setSpin(true);
      axios
        .post("http://localhost:5000/signup", {
          data: { username, email, password },
        })
        .then((res) => {
          setSpin(false);
          toast.success(res?.data?.message);
          navigate("/login");
        })
        .catch((err) => {
          setSpin(false);
          if (err.response.data.status) {
            toast.error(err.response.data.message);
          } else {
            toast.error(err.message);
          }
        });
    }
  };
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
    >
      {spin ? "Loading..." : ""}
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Sign In</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={Signup} noValidate className="row g-3">
            <div className="col-md-12">
              <MDBValidationItem feedback="Please Provide Username" invalid>
                <MDBInput
                  label="Username"
                  type="text"
                  value={username || ""}
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </MDBValidationItem>
            </div>
            <div className="col-md-12">
              <MDBValidationItem feedback="Please Provide valid Email" invalid>
                <MDBInput
                  label="Email"
                  type="email"
                  value={email || ""}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </MDBValidationItem>
            </div>
            <div className="col-md-12">
              <MDBValidationItem feedback="Please Provide Password" invalid>
                <MDBInput
                  label="Password"
                  type="password"
                  value={password || ""}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </MDBValidationItem>
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2">
                Signup
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/login">
            <p>Already have an account? Login</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Index;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
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

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();

  const Login = () => {
    if (email && password) {
      setSpin(true);
      axios
        .post("http://localhost:5000/login", {
          data: JSON.stringify({ email, password }),
        })
        .then((res) => {
          setSpin(false);
          if (res) {
            console.log("inside", res);
            let result = res.data;
            localStorage.setItem("token", JSON.stringify(result.token));
            if (result?.status === 200) {
              toast.success(result?.result);
            }
            navigate("/");
          }
        })
        .catch((err) => {
          if (err?.response?.data?.status === 401) {
            setSpin(false);
            toast.error(err?.response?.data?.message);
          } else {
            setSpin(false);
            toast.error(err?.message);
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
          <MDBValidation onSubmit={Login} noValidate className="row g-3">
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
                Login
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/register">
            <p>Don't have an account ? Sign Up</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Index;

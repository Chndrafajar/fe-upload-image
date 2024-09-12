import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  //form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/v1/user/login", { username, password });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));

        setLoading(false);
        navigate("/upload");
      } else {
        setLoading(false);
        toast.success(res.data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

  return (
    <LoginWrapper>
      <CardLogin>
        <Dflex>
          <img src="/images/logo.png" alt="" style={{ width: "50px" }} />
          <div>
            <h3>Upload Image</h3>
          </div>
        </Dflex>
        <Form className="mt-4" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {loading ? (
            <ButtonLogin className="mt-2">Loading....</ButtonLogin>
          ) : (
            <ButtonLogin className="mt-2" type="submit">
              Login
            </ButtonLogin>
          )}
        </Form>
      </CardLogin>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  min-height: 100vh;
  background-color: #f8f9fd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 1.25rem;
`;

const CardLogin = styled(Card)`
  background-color: #fff;
  padding: 1.875rem;
  width: 28.25rem;
  border: none;
  border-radius: 0.625rem;
`;

const Dflex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

const ButtonLogin = styled(Button)`
  width: 100%;
  background-color: #3772f0;
`;

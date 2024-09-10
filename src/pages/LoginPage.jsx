import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <LoginWrapper>
      <CardLogin>
        <Dflex>
          <img src="/images/logo.png" alt="" style={{ width: "50px" }} />
          <div>
            <h3>Upload Image</h3>
          </div>
        </Dflex>
        <Form className="mt-4">
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="username" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <ButtonLogin className="mt-2">Login</ButtonLogin>
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

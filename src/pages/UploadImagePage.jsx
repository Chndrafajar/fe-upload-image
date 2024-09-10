import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { LuCopy } from "react-icons/lu";

export default function UploadImagePage() {
  return (
    <BackWrapper>
      <CardUpload>
        <h4 style={{ marginBottom: "0" }}>Upload Image</h4>
        <input type="file" />
      </CardUpload>
      <CardCopyLinkImage>
        <div>
          <b>Link Image: </b> <span className="ms-2">http://localhost:3000/upload</span>
        </div>
        <ButtonCopy>
          <LuCopy />
        </ButtonCopy>
      </CardCopyLinkImage>
    </BackWrapper>
  );
}

const BackWrapper = styled.div`
  min-height: 100vh;
  background-color: #f8f9fd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 1.25rem;
  flex-direction: column;
`;

const CardUpload = styled(Card)`
  background-color: #fff;
  border-radius: 0.625rem;
  padding: 1.875rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  input {
    position: absolute;
    width: 100%;
    z-index: 999;
    opacity: 0;
    cursor: pointer;
  }
`;

const CardCopyLinkImage = styled(Card)`
  background-color: #fff;
  border-radius: 0.625rem;
  padding: 3rem 1.875rem;
  border: none;
  margin-top: 1.875rem;
`;

const ButtonCopy = styled.div`
  position: absolute;
  top: 0.938rem;
  right: 0.938rem;
  svg {
    font-size: 1.125rem;
    cursor: pointer;

    &:hover {
      color: #0d7c66;
      transition: 0.3s ease;
    }
  }
`;

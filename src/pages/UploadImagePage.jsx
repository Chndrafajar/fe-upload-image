import React, { useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { LuCopy } from "react-icons/lu";
import { toast } from "react-toastify";
import axiosInstance from "../config/axiosInstance";

export default function UploadImagePage() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      setLoading(true);
      try {
        const response = await axiosInstance.post("/api/v1/images/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data && response.data.image && response.data.image.id) {
          const imageId = response.data.image.id;
          setImageUrl(`https://upload-image-be.vercel.app/api/v1/images/${imageId}`);
          toast.success(response.data.message);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(imageUrl)
      .then(() => alert("URL copied to clipboard!"))
      .catch((err) => console.error("Failed to copy URL:", err));
  };

  return (
    <BackWrapper>
      <CardUpload>
        <img src="/images/icons-image.png" alt="" width="60px" />
        <h4 style={{ marginBottom: "0" }}>Upload Image</h4>
        <input type="file" onChange={handleFileChange} />
      </CardUpload>

      <CardCopyLinkImage>
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <>
            {imageUrl ? (
              <>
                <div>
                  <b>Link Image: </b> <span className="ms-2">{imageUrl}</span>
                </div>
                <ButtonCopy onClick={copyToClipboard}>
                  <LuCopy />
                </ButtonCopy>
              </>
            ) : (
              <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <img src="/images/icons-image.png" alt="" width="60px" />
                <h4 className="mt-2">Link Images Disini</h4>
              </div>
            )}
          </>
        )}
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

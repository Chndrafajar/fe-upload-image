import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UploadImagePage from "./pages/UploadImagePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/upload" element={<UploadImagePage />} />
    </Routes>
  );
}

export default App;

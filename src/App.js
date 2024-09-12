import "./App.css";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UploadImagePage from "./pages/UploadImagePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PrivateRoute() {
  const location = useLocation();

  const auth = localStorage.getItem("auth");

  if (auth) {
    // Pengguna telah login, render halaman private
    return <Outlet />;
  } else {
    // Pengguna belum login, arahkan ke halaman login
    return <Navigate to="/" state={{ from: location }} replace />;
  }
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/upload" element={<UploadImagePage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

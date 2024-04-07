import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>NotFound</div>
    <button onClick={() => navigate("/")}>Back to Home</button>
      {/* <Navigate to="/" /> */}
    </>

    // Contoh penggunaan useNavigate adalah ketika login, lalu kita redirect ke halaman Home/Dashboard
  );
}

export default NotFound

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ProtectedRoutes(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
}
import React from "react";
import logo from "../img/partsfrio.jpg";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const response = await fetch("https://coldparts.online/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      // Borra la información de la sesión del usuario
      localStorage.removeItem("token");
      // Redirige al usuario a la página de inicio de sesión
      navigate("/login");
    } else {
      console.error("Logout failed");
    }
  };
  const navigate = useNavigate();
  return (
    <div className="p-2 text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize">
      <button onClick={() => navigate("/maindashboard")}>
        <span className="px-2 mr-2 border-r border-gray-800">
          <img
            src={logo}
            alt="parts frio"
            className="w-15 h-11 -mt-1 inline mx-auto"
          />
        </span>
      </button>
      <button className="float-right" id="logout" onClick={handleLogout}>
        <ArrowLeftOnRectangleIcon className="h-7 w-7" />
      </button>
    </div>
  );
}

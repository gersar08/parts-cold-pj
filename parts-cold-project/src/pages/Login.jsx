import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useGetRequest from "../Hooks/useGetRequest";
export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { data, loading, error } = useGetRequest(
    `/api/login?user_name=${username}&password=${password}` //TODO: Cambiar URL de la api
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Si el hook está cargando, no se realiza ninguna acción
      if (loading) return;

      // Si hay un error en el hook, mostramos un mensaje de error
      if (error) {
        throw new Error(error.message);
      }

      // Si hay datos devueltos por el hook (es decir, la solicitud se completó con éxito), realizamos acciones correspondientes
      if (data) {
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", username);
        localStorage.setItem("userIdLogged", data.user.id);
        navigate("/maindashboard");
      }
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation: " + error.message
      );
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="bg-gray-100 rounded-lg py-10 px-4 lg:px-24">
      <ToastContainer />
      <p className="text-center text-sm bold text-gray-500 font-light">
        Inicia Sesion para continuar
      </p>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
            id="username"
            type="text"
            required
            placeholder="Usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="absolute left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 ml-3 text-gray-400 p-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>
        <div className="relative mt-3">
          <input
            className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
            id="password"
            required
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="absolute left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 ml-3 text-gray-400 p-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            Iniciar Sesion
          </button>
        </div>
      </form>
    </div>
  );
}

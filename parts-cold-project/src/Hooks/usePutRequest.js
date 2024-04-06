import { useState } from 'react';
import axios from 'axios';

// Creamos una función que devuelve una instancia de Axios configurada
const createAxiosInstance = () => {
  const apiUrl = process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;

  return axios.create({
    baseURL: apiUrl, // URL base para todas las solicitudes
    timeout: 5000, // Tiempo de espera para las solicitudes (en milisegundos)
    headers: {
      'Content-Type': 'application/json', // Tipo de contenido para las solicitudes
    },
  });
};

// Hook personalizado para manejar solicitudes PUT
const usePutRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const putData = async (url, data, token) => {
    setLoading(true);
    try {
      const axiosInstance = createAxiosInstance();
      await axiosInstance.put(url, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { putData, loading, error };
};

export default usePutRequest;
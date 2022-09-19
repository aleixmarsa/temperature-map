import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface City {
  id: number;
  name: string;
  coords: [number, number];
}
const useFetchCitiesCoords = () => {
  const [citites, setCities] = useState<Array<City>>([]);

  const fetchCititesCoords = async () => {
    const baseURL = window.location.href;
    const response = await axios.get(`${baseURL}api/cities`);
    setCities(response.data);
  };
  useEffect(() => {
    fetchCititesCoords();
  }, []);

  return citites;
};

export default useFetchCitiesCoords;

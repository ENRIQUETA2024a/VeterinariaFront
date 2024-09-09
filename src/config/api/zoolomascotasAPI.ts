import axios from "axios";

//TODO: IP de la pc donde se ejecutara el BACKEND
const urlAPI = "http://192.168.2.3:4000/vet/";

const zoolomascotasAPI = axios.create({
  baseURL: urlAPI,
  headers: {
    "Content-Type": "application/json",
  },
});

export { zoolomascotasAPI };

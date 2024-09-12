import axios from "axios";

//TODO: IP de la pc donde se ejecutara el BACKEND
const urlAPI = "http://172.20.10.5:4000/vet/";

const zoolomascotasAPI = axios.create({
  baseURL: urlAPI,
  headers: {
    "Content-Type": "application/json",
  },
});

export { zoolomascotasAPI };

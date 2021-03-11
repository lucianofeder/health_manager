import axios from "axios";

const api = axios.create({
  baseURL: "https://kabit-api.herokuapp.com/",
  //   headers: { Authorization: `Bearer ${token}` },
});

export default api;

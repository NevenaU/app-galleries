import axios from "axios";

const HTTP = axios.create({
    baseURL: "http://localhost:8000/api",
})

HTTP.interceptors.request.use(function(request) {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

HTTP.interceptors.response.use(async function(response) {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token && response.status == 401) {
    const { data } = await HTTP.post("/refresh-token");
    localStorage.setItem("token", data.token);
  }
  return response;
});

export default HTTP;

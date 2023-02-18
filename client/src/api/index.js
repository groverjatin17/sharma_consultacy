import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchJobs = () => API.get("/jobs");
export const signIn = (formData) => API.post('user/signin', formData);
export const signUp = (formData) => API.post('user/signup', formData);

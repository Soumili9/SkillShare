import axios from "axios";

const API_URL = 'http://localhost:8185/api/enrollmentdetails';

export const getEnrollmentDetails = () => axios.get(`${API_URL}/`);
export const createEnrollmentDetails = (details) => axios.post(`${API_URL}/create`, details);
export const updateEnrollmentDetails = (details) => axios.put(`${API_URL}/edit`, details);
export const deleteEnrollmentDetails = (id) => axios.delete(`${API_URL}/delete/${id}`);
export const getEnrollmentDetailsById = (id) => axios.get(`${API_URL}/${id}`);

import axios from "axios";

const API_URL = 'http://localhost:8185/api/enrollments';

export const getEnrollments = () => axios.get(`${API_URL}/`);
export const createEnrollment = (enrollmentRequest) => axios.post(`${API_URL}/enroll`, enrollmentRequest);
export const deleteEnrollment = (id) => axios.delete(`${API_URL}/withdraw/${id}`);
export const getEnrollmentsByUserId = (userId) => axios.get(`${API_URL}/user/${userId}`);

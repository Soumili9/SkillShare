import axios from 'axios';
const API_URL = "http://localhost:8185/api/course";

export const getCourses = () => axios.get(`${API_URL}/`);
export const getCourseById = (id) => axios.get(`${API_URL}/${id}`);
export const createCourse = (course) => axios.post(`${API_URL}/create`, course);
export const updateCourse = (course) => axios.put(`${API_URL}/edit`, course);
export const deleteCourse = (id) => axios.delete(`${API_URL}/delete/${id}`);

import axios from "axios";

const API_URL = 'http://localhost:8185/api/content';

export const getContentByCourseId = (courseId) => axios.get(`${API_URL}/course/${courseId}`);
export const createCourseContent = (content) => axios.post(`${API_URL}/add`, content);
export const updateCourseContent = (content) => axios.put(`${API_URL}/edit`, content);
export const deleteCourseContent = (id) => axios.delete(`${API_URL}/delete/${id}`);

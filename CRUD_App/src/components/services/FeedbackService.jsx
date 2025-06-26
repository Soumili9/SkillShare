import axios from "axios";

const API_URL = 'http://localhost:8185/api/feedbacks';

export const getFeedbackByCourseId = (courseId) => axios.get(`${API_URL}/course/${courseId}`);
export const createFeedback = (feedback) => axios.post(`${API_URL}/add`, feedback);
export const updateFeedback = (feedback) => axios.put(`${API_URL}/edit`, feedback);
export const deleteFeedback = (id) => axios.delete(`${API_URL}/delete/${id}`);

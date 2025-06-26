import axios from "axios";

const API_URL = 'http://localhost:8185/api/payment';

export const createEnrollmentOrder = (orderRequest) => axios.post(`${API_URL}/createorder`, orderRequest);
export const confirmPayment = (confirmPaymentRequest) => axios.post(`${API_URL}/confirmpayment`, confirmPaymentRequest);

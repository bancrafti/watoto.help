// src/services/auth.js
import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1/auth'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const signup = async (userData) => {
  try {
    const response = await api.post('/signup', userData)
    return response
  } catch (error) {
    throw error.response?.data || error
  }
}

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password })
    return response
  } catch (error) {
    throw error.response?.data || error
  }
}

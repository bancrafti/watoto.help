// src/services/auth.js
import axios from 'axios'
import { API_BASE_URL } from '@/config/api'

const api = axios.create({
  baseURL: `${API_BASE_URL}/auth`,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add error interceptor
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const errorMessage = error.response.data.message || 'An error occurred'
      return Promise.reject(new Error(errorMessage))
    } else if (error.request) {
      // The request was made but no response was received
      return Promise.reject(new Error('No response from server. Please check your connection.'))
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(new Error('An error occurred while setting up the request'))
    }
  }
)

export const signup = async (userData) => {
  try {
    const response = await api.post('/signup', userData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password })
    return response.data
  } catch (error) {
    throw error
  }
}

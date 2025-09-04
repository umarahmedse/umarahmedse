// lib/api.js
import axios from "axios"

// Determine the base URL based on environment
const getBaseURL = () => {
  if (typeof window === 'undefined') {
    // Server-side
    if (process.env.NODE_ENV === 'production') {
      return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '/api'
    } else {
      return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'
    }
  } else {
    // Client-side
    if (process.env.NODE_ENV === 'production') {
      return '/api'
    } else {
      return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'
    }
  }
}

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message)
    return Promise.reject(error)
  },
)

export default axiosInstance
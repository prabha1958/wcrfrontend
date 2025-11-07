const API_BASE_URL = process.env.BACKEND_API_URL || "http://localhost:8000"

export const API_ENDPOINTS = {
  OTP_SEND: `${API_BASE_URL}/api/otp/send`,
  OTP_VERIFY: `${API_BASE_URL}/otp/verify`,
} as const

export { API_BASE_URL }

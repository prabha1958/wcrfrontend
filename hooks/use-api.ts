"use client"

import { useAuth } from "@/contexts/auth-context"

const getBackendUrl = () => {
  return process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000"
}

export function useApi() {
  const { token } = useAuth()

  const apiCall = async (endpoint: string, options: RequestInit = {}) => {
    const url = `${getBackendUrl()}${endpoint}`

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options.headers,
    }

    // Add authorization header if token exists
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    return response.json()
  }

  return { apiCall }
}

import { type NextRequest, NextResponse } from "next/server"
import { API_ENDPOINTS } from "@/lib/api-config"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log("[v0] Sending OTP request to backend:", body)
    console.log("[v0] Using endpoint:", API_ENDPOINTS.OTP_SEND)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    const response = await fetch(API_ENDPOINTS.OTP_SEND, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    console.log("[v0] Response status:", response.status)
    console.log("[v0] Response headers:", Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      console.error("[v0] Backend returned error status:", response.status)
      const errorText = await response.text()
      console.error("[v0] Backend error response:", errorText)

      return NextResponse.json(
        {
          message: `Backend server error: ${response.status}`,
          details: errorText,
          endpoint: API_ENDPOINTS.OTP_SEND,
        },
        { status: response.status },
      )
    }

    let data
    try {
      data = await response.json()
    } catch (parseError) {
      console.error("[v0] Failed to parse response as JSON:", parseError)
      const responseText = await response.text()
      console.error("[v0] Raw response:", responseText)

      return NextResponse.json(
        {
          message: "Invalid JSON response from backend server",
          rawResponse: responseText,
          endpoint: API_ENDPOINTS.OTP_SEND,
        },
        { status: 502 },
      )
    }

    console.log("[v0] Backend OTP Send Response:", data)
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error("[v0] OTP Send API Error:", error)

    let errorMessage = "Failed to send OTP"
    let errorDetails = ""

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        errorMessage = "Request timeout - backend server took too long to respond"
        errorDetails = "The backend server at " + API_ENDPOINTS.OTP_SEND + " did not respond within 10 seconds"
      } else if (error.message.includes("fetch")) {
        errorMessage = "Cannot connect to backend server"
        errorDetails = "Make sure your Laravel server is running on " + API_ENDPOINTS.OTP_SEND
      } else {
        errorMessage = error.message
        errorDetails = error.stack || ""
      }
    }

    return NextResponse.json(
      {
        message: errorMessage,
        details: errorDetails,
        endpoint: API_ENDPOINTS.OTP_SEND,
        troubleshooting: [
          "1. Check if Laravel server is running on port 8000",
          "2. Verify CORS is configured in Laravel to allow requests from this domain",
          "3. Check if the endpoint /api/otp/send exists in your Laravel routes",
          "4. Ensure Laravel server is accessible from this Next.js server",
        ],
      },
      { status: 500 },
    )
  }
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Mail, ArrowLeft, Loader2, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

const getBackendUrl = () => {
  // In v0 environment, use a configurable backend URL
  // In local development, this can be localhost:8000
  return process.env.NEXT_PUBLIC_BACKEND_URL || "https://csiadmin.csimarital.in"
}

export default function LoginPage() {
  const [step, setStep] = useState<"contact" | "code">("contact")
  const [contact, setContact] = useState("")
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { login } = useAuth()

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const backendUrl = getBackendUrl()
    console.log("[v0] Sending OTP to backend:", backendUrl)

    try {
      const response = await fetch(`${backendUrl}/otp/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ contact }),
      })

      const data = await response.json()
      console.log("[v0] OTP Send Response:", data)

      if (response.ok) {
        setStep("code")
      } else {
        setError(data.message || "Failed to send OTP")
      }
    } catch (error) {
      console.error("[v0] OTP Send Error:", error)
      if (error instanceof TypeError && error.message.includes("fetch")) {
        setError(
          `Cannot connect to backend server at ${backendUrl}. Please ensure your Laravel server is running and accessible.`,
        )
      } else {
        setError("Network error. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const backendUrl = getBackendUrl()
    console.log("[v0] Verifying OTP with backend:", backendUrl)

    try {
      const response = await fetch(`${backendUrl}/otp/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ contact, code }),
      })

      const data = await response.json()
      console.log("[v0] OTP Verify Response:", data)

      if (response.ok) {
        if (data.access_token) {
          const user = {
            id: data.user?.id || data.id || "1",
            name: data.user?.name || data.name || "Member",
            email: data.user?.email || data.email || contact,
            contact: data.user?.contact || data.contact || contact,
          }

          login(data.access_token, user)

          console.log("[v0] Login successful, token stored")

          router.push("/profile")
        } else {
          setError("Login successful but no token received")
        }
      } else {
        setError(data.message || "Invalid OTP")
      }
    } catch (error) {
      console.error("[v0] OTP Verify Error:", error)
      if (error instanceof TypeError && error.message.includes("fetch")) {
        setError(
          `Cannot connect to backend server at ${backendUrl}. Please ensure your Laravel server is running and accessible.`,
        )
      } else {
        setError("Network error. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight-blue to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Member Login</CardTitle>
          <CardDescription>
            {step === "contact" ? "Enter your email to receive an OTP" : "Enter the OTP sent to your email"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-2 bg-blue-50 rounded-md text-xs text-blue-700">
            <div className="flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              <span>Backend: {getBackendUrl()}</span>
            </div>
          </div>

          {step === "contact" ? (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {error && <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</div>}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending OTP...
                  </>
                ) : (
                  "Send OTP"
                )}
              </Button>

              <div className="text-center">
                <Link href="/" className="text-sm text-muted-foreground hover:underline">
                  Back to Home
                </Link>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <div className="space-y-2">
                <Label>Enter OTP</Label>
                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={code} onChange={(value) => setCode(value)}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <p className="text-sm text-muted-foreground text-center">OTP sent to {contact}</p>
              </div>

              {error && <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</div>}

              <Button type="submit" className="w-full" disabled={isLoading || code.length !== 6}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify & Login"
                )}
              </Button>

              <div className="flex justify-between text-sm">
                <button
                  type="button"
                  onClick={() => {
                    setStep("contact")
                    setCode("")
                    setError("")
                  }}
                  className="text-muted-foreground hover:underline flex items-center"
                >
                  <ArrowLeft className="mr-1 h-3 w-3" />
                  Change Email
                </button>
                <button
                  type="button"
                  onClick={handleSendOTP}
                  className="text-primary hover:underline"
                  disabled={isLoading}
                >
                  Resend OTP
                </button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

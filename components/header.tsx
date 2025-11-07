"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Calendar, Heart, CreditCard, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 hover-scale">
              <Image
                src="/images/church-logo.png"
                alt="CSI Centenary Wesley Church Logo"
                width={50}
                height={50}
                className="rounded-full transition-transform duration-300"
              />
              <div className="hidden md:block">
                <h1 className="text-lg font-bold text-primary">CSI Centenary Wesley Church</h1>
                <p className="text-sm text-muted-foreground">Ramkote, Hyderabad</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {!isAuthenticated ? (
                <>
                  <Button asChild className="transition-all duration-300 hover:scale-105">
                    <Link href="/login">Member Login</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" asChild className="transition-all duration-300 hover:scale-105">
                    <Link href="/profile" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{user?.name || "Member"}</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild className="transition-all duration-300 hover:scale-105">
                    <Link href="/subscription" className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Subscription</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild className="transition-all duration-300 hover:scale-105">
                    <Link href="/matrimonial" className="flex items-center space-x-2">
                      <Heart className="h-4 w-4" />
                      <span>Matrimonial</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild className="transition-all duration-300 hover:scale-105">
                    <Link href="/events" className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Events</span>
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </>
              )}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </Button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="fixed top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden animate-fade-in-up">
            <nav className="flex flex-col p-4 space-y-2">
              {!isAuthenticated ? (
                <>
                  <Button
                    variant="ghost"
                    asChild
                    className="justify-start transition-all duration-300 hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/login">Member Login</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    asChild
                    className="justify-start transition-all duration-300 hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/profile" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="justify-start transition-all duration-300 hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/subscription" className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Subscription</span>
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="justify-start transition-all duration-300 hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/matrimonial" className="flex items-center space-x-2">
                      <Heart className="h-4 w-4" />
                      <span>Matrimonial</span>
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="justify-start transition-all duration-300 hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/events" className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Events</span>
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="justify-start transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </>
              )}
            </nav>
          </div>
        </>
      )}
    </>
  )
}

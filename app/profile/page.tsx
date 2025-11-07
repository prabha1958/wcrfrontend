"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, MapPin, GraduationCap, Briefcase, CreditCard, Users, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { useAuth } from "@/contexts/auth-context"
import { ProtectedRoute } from "@/components/protected-route"

function ProfileContent() {
  const { user, logout } = useAuth()

  const memberData = {
    familyName: user?.name?.split(" ")[0] || "Member",
    firstName: user?.name?.split(" ")[0] || "Member",
    middleName: user?.name?.split(" ")[1] || "",
    lastName: user?.name?.split(" ")[2] || "",
    email: user?.email || "",
    contact: user?.contact || "",
    profileImage: "/church-member-profile.png",
    education: "Master of Business Administration",
    occupation: "Software Engineer",
    company: "Tech Solutions Pvt Ltd",
    address: "House No. 123, Street 45, Ramkote",
    areaNumber: "Area 7",
    subscriptionStatus: "Paid until March 2025",
    familyRelation: `Member of CSI Centenary Wesley Church`,
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
              <User className="h-8 w-8" />
              Member Profile
            </h1>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Image and Basic Info */}
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={memberData.profileImage || "/placeholder.svg"}
                    alt="Profile Picture"
                    fill
                    className="object-cover rounded-full border-4 border-primary/30"
                  />
                </div>
                <CardTitle className="text-xl">
                  {memberData.firstName} {memberData.middleName} {memberData.lastName}
                </CardTitle>
                <p className="text-muted-foreground">{memberData.familyRelation}</p>
              </CardHeader>
              <CardContent className="text-center">
                <Badge
                  className={`${
                    memberData.subscriptionStatus.includes("Paid")
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-destructive hover:bg-destructive/90"
                  }`}
                >
                  <CreditCard className="h-3 w-3 mr-1" />
                  {memberData.subscriptionStatus}
                </Badge>
              </CardContent>
            </Card>

            {/* Detailed Information */}
            <div className="md:col-span-2 space-y-6">
              {/* Personal Details */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Users className="h-5 w-5" />
                    Personal Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Family Name</label>
                      <p className="font-medium">{memberData.familyName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">First Name</label>
                      <p className="font-medium">{memberData.firstName}</p>
                    </div>
                    {memberData.middleName && (
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Middle Name</label>
                        <p className="font-medium">{memberData.middleName}</p>
                      </div>
                    )}
                    {memberData.lastName && (
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                        <p className="font-medium">{memberData.lastName}</p>
                      </div>
                    )}
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Email</label>
                      <p className="font-medium flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {memberData.email}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Contact</label>
                      <p className="font-medium flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {memberData.contact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education & Occupation */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <GraduationCap className="h-5 w-5" />
                    Education & Career
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Education</label>
                        <p className="font-medium">{memberData.education}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Occupation</label>
                        <p className="font-medium">{memberData.occupation}</p>
                        <p className="text-sm text-muted-foreground">{memberData.company}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <MapPin className="h-5 w-5" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">{memberData.address}</p>
                      <p className="text-sm text-muted-foreground">{memberData.areaNumber}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex gap-4">
                <Button className="flex-1">Edit Profile</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Change Password
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  )
}

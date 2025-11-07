import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MapPin, GraduationCap, Briefcase, Calendar, IndianRupee } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MatrimonialPage() {
  const matches = [
    {
      id: 1,
      name: "Grace Elizabeth",
      age: 26,
      dob: "1998-03-15",
      education: "Master of Computer Applications",
      job: "Software Developer",
      designation: "Senior Developer",
      company: "Microsoft India",
      location: "Hyderabad",
      income: "12,00,000",
      image: "/young-christian-woman-professional.jpg",
    },
    {
      id: 2,
      name: "Rebecca Thomas",
      age: 24,
      dob: "2000-07-22",
      education: "Bachelor of Medicine",
      job: "Doctor",
      designation: "Junior Resident",
      company: "Apollo Hospitals",
      location: "Hyderabad",
      income: "8,50,000",
      image: "/young-female-doctor.png",
    },
    {
      id: 3,
      name: "Sarah Wilson",
      age: 28,
      dob: "1996-11-08",
      education: "MBA Finance",
      job: "Financial Analyst",
      designation: "Senior Analyst",
      company: "ICICI Bank",
      location: "Hyderabad",
      income: "10,50,000",
      image: "/professional-woman-banker.jpg",
    },
    {
      id: 4,
      name: "Hannah David",
      age: 25,
      dob: "1999-05-12",
      education: "B.Tech Computer Science",
      job: "Data Scientist",
      designation: "Data Scientist",
      company: "Amazon",
      location: "Hyderabad",
      income: "15,00,000",
      image: "/young-tech-professional-woman.jpg",
    },
    {
      id: 5,
      name: "Ruth Johnson",
      age: 27,
      dob: "1997-09-30",
      education: "Master of Architecture",
      job: "Architect",
      designation: "Project Architect",
      company: "L&T Construction",
      location: "Hyderabad",
      income: "9,00,000",
      image: "/female-architect-professional.jpg",
    },
    {
      id: 6,
      name: "Esther Matthew",
      age: 23,
      dob: "2001-01-18",
      education: "CA (Chartered Accountant)",
      job: "Chartered Accountant",
      designation: "Senior Associate",
      company: "Deloitte",
      location: "Hyderabad",
      income: "11,00,000",
      image: "/young-female-chartered-accountant.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
              <Heart className="h-10 w-10" />
              Matrimonial Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Find your life partner within our Christian community. All profiles are verified church members.
            </p>
          </div>

          {/* Subscription Notice */}
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Premium Matrimonial Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Subscribe to view detailed profiles and express interest. Valid for 6 months.
                  </p>
                </div>
                <Button>Subscribe Now - ₹2,000</Button>
              </div>
            </CardContent>
          </Card>

          {/* Matches Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Latest Matches</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.map((match) => (
                <Card key={match.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={match.image || "/placeholder.svg"}
                        alt={match.name}
                        fill
                        className="object-cover rounded-full border-2 border-primary/30"
                      />
                    </div>
                    <CardTitle className="text-lg">{match.name}</CardTitle>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {match.age} years old
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm">{match.education}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Briefcase className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium">{match.designation}</p>
                        <p className="text-muted-foreground">{match.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <p className="text-sm">{match.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="h-4 w-4 text-primary" />
                      <p className="text-sm font-medium">₹{match.income} per annum</p>
                    </div>

                    <div className="pt-4 space-y-2">
                      <Button asChild className="w-full" size="sm">
                        <Link href={`/matrimonial/${match.id}`}>View Details</Link>
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent" size="sm">
                        Express Interest
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Information Section */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Subscribe</h3>
                  <p className="text-sm text-muted-foreground">
                    Get 6-month access to detailed profiles and contact information.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Browse & Connect</h3>
                  <p className="text-sm text-muted-foreground">
                    View profiles and express interest in potential matches.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Meet & Decide</h3>
                  <p className="text-sm text-muted-foreground">Connect with families and make informed decisions.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

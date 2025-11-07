import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Calendar, CheckCircle, XCircle } from "lucide-react"
import Image from "next/image"

export default function SubscriptionPage() {
  const subscriptionHistory = [
    {
      date: "2024-12-01",
      amount: 500,
      paymentId: "pay_123456789",
      status: "success",
    },
    {
      date: "2024-11-01",
      amount: 500,
      paymentId: "pay_987654321",
      status: "success",
    },
    {
      date: "2024-10-01",
      amount: 500,
      paymentId: "pay_456789123",
      status: "success",
    },
  ]

  const familyMembers = [
    {
      name: "John David Johnson",
      image: "/male-church-member.jpg",
      relation: "Self",
    },
    {
      name: "Mary Johnson",
      image: "/female-church-member.jpg",
      relation: "Wife",
    },
    {
      name: "Sarah Johnson",
      image: "/placeholder-9hrni.png",
      relation: "Daughter",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-8 flex items-center gap-2">
            <CreditCard className="h-8 w-8" />
            Subscription Management
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Family Members */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Family Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {familyMembers.map((member) => (
                    <div key={member.name} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="relative w-12 h-12">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.relation}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-medium text-primary mb-2">Current Status</h3>
                  <Badge className="bg-green-500 hover:bg-green-600 mb-3">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Active until March 2025
                  </Badge>
                  <Button className="w-full" size="sm">
                    Pay Monthly Subscription
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">₹500 per month</p>
                </div>
              </CardContent>
            </Card>

            {/* Subscription History */}
            <div className="lg:col-span-2">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" />
                    Payment History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {subscriptionHistory.map((payment) => (
                      <div
                        key={payment.paymentId}
                        className="flex items-center justify-between p-4 border border-border/50 rounded-lg hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-2 rounded-full ${
                              payment.status === "success" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                            }`}
                          >
                            {payment.status === "success" ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <XCircle className="h-4 w-4" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">Monthly Subscription</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(payment.date).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">₹{payment.amount}</p>
                          <p className="text-xs text-muted-foreground">ID: {payment.paymentId}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h3 className="font-medium text-primary mb-2">Payment Information</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      All payments are processed securely through Razorpay. You will receive a confirmation email after
                      successful payment.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <span>Secure payment powered by Razorpay</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

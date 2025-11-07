import { Clock, MapPin, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ChurchInfo() {
  const timings = [
    { service: "Sunday Morning Service", time: "9:00 AM - 11:00 AM" },
    { service: "Sunday Evening Service", time: "6:00 PM - 7:30 PM" },
    { service: "Wednesday Prayer Meeting", time: "7:00 PM - 8:00 PM" },
    { service: "Friday Youth Fellowship", time: "7:00 PM - 8:30 PM" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Church Timings */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Clock className="h-5 w-5" />
                Church Timings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timings.map((timing) => (
                  <div
                    key={timing.service}
                    className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0"
                  >
                    <span className="font-medium">{timing.service}</span>
                    <span className="text-primary">{timing.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MapPin className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      CSI Centenary Wesley Church
                      <br />
                      Ramkote, Hyderabad - 500003
                      <br />
                      Telangana, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 40 2461 2345</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@csicentenarywesley.org</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

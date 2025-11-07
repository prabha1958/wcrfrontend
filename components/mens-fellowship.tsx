import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function MensFellowship() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Men's Fellowship</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building strong Christian brotherhood through prayer, fellowship, and service to the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center hover-lift">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
              <Image
                src="/professional-indian-man-secretary-church-leader.jpg"
                alt="Men's Fellowship Secretary"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Mr. David Kumar</h3>
            <p className="text-muted-foreground mb-2">Secretary, Men's Fellowship</p>
            <p className="text-sm text-muted-foreground">📞 +91 98765 43210 | ✉️ david.kumar@csiramkote.org</p>
          </div>

          <Card className="hover-lift transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg">Last Week's Event</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image
                  src="/men-praying-together-in-church-fellowship-meeting.jpg"
                  alt="Men's Fellowship Prayer Meeting"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h4 className="font-semibold mb-2">Prayer & Bible Study</h4>
              <p className="text-sm text-muted-foreground mb-2">Saturday, January 20, 2025 | 6:00 PM</p>
              <p className="text-sm">
                Our weekly men's fellowship gathered for an inspiring Bible study on "Leadership in Faith" followed by
                group prayers for church ministries. 25 members participated in this enriching session.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

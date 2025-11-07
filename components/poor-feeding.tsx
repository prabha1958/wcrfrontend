import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function PoorFeeding() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Poor Feeding Ministry</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Serving the needy with love and compassion, following Christ's example of caring for the least among us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Secretary Info */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/compassionate-indian-church-volunteer-coordinator.jpg"
                alt="Poor Feeding Ministry Secretary"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Mrs. Grace Thomas</h3>
            <p className="text-muted-foreground mb-2">Secretary, Poor Feeding Ministry</p>
            <p className="text-sm text-muted-foreground">📞 +91 98765 43212 | ✉️ grace.thomas@csiramkote.org</p>
          </div>

          {/* Last Week Event */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Last Week's Event</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/volunteers-serving-food-to-poor-people-community-s.jpg"
                  alt="Poor Feeding Ministry Service"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold mb-2">Community Meal Service</h4>
              <p className="text-sm text-muted-foreground mb-2">Sunday, January 21, 2025 | 1:00 PM</p>
              <p className="text-sm">
                Our volunteers served nutritious meals to 150 underprivileged individuals and families. The ministry
                also distributed clothing and essential supplies, touching hearts with Christ's love.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

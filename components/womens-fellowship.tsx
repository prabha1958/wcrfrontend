import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function WomensFellowship() {
  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Women's Fellowship</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering women in faith through worship, service, and sisterhood in Christ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Secretary Info */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/professional-indian-woman-secretary-church-leader.jpg"
                alt="Women's Fellowship Secretary"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Mrs. Priya Samuel</h3>
            <p className="text-muted-foreground mb-2">Secretary, Women's Fellowship</p>
            <p className="text-sm text-muted-foreground">📞 +91 98765 43211 | ✉️ priya.samuel@csiramkote.org</p>
          </div>

          {/* Last Week Event */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Last Week's Event</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/women-singing-worship-songs-in-church-fellowship.jpg"
                  alt="Women's Fellowship Worship"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold mb-2">Worship & Testimony Service</h4>
              <p className="text-sm text-muted-foreground mb-2">Thursday, January 18, 2025 | 10:00 AM</p>
              <p className="text-sm">
                A beautiful morning of worship songs and personal testimonies where sisters shared God's faithfulness in
                their lives. The session concluded with prayers for families and community needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PresbytersSection() {
  const presbyterInCharge = {
    name: "Rev. Dr. Samuel Johnson",
    image: "/presbyter-portrait.jpg",
    degrees: ["M.Th", "Ph.D"],
    dateOfCharge: "January 2020",
    isInCharge: true,
    introduction:
      "Rev. Dr. Samuel Johnson has been serving our congregation with dedication and spiritual wisdom for over four years. With his extensive theological background and pastoral experience spanning 15 years, he has led our church through significant growth and community outreach programs. His vision for our church focuses on strengthening faith, building community bonds, and serving the underprivileged in our society.",
  }

  const otherPresbyters = [
    {
      name: "Rev. Mary Thomas",
      image: "/female-presbyter.jpg",
      degrees: ["M.Div"],
      dateOfCharge: "March 2018",
    },
    {
      name: "Rev. David Wilson",
      image: "/male-presbyter.jpg",
      degrees: ["B.Th", "M.A"],
      dateOfCharge: "June 2019",
    },
    {
      name: "Rev. Sarah Matthew",
      image: "/female-presbyter-2.jpg",
      degrees: ["B.Th", "M.Th"],
      dateOfCharge: "September 2021",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Presbyters</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Presbyter-in-Charge */}
          <div className="md:col-span-3 mb-12">
            <Card className="border-primary/20 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 p-6">
                {/* Left side - Presbyter Info */}
                <div className="flex flex-col items-center">
                  <div className="relative w-48 h-48 mb-6">
                    <Image
                      src={presbyterInCharge.image || "/placeholder.svg"}
                      alt={presbyterInCharge.name}
                      fill
                      className="object-cover rounded-full border-4 border-primary"
                    />
                  </div>
                  <Badge className="mb-3 bg-primary text-white">Presbyter-in-Charge</Badge>
                  <h3 className="text-2xl font-bold text-center mb-4">{presbyterInCharge.name}</h3>
                  <div className="flex justify-center gap-2 mb-4">
                    {presbyterInCharge.degrees.map((degree) => (
                      <Badge key={degree} variant="secondary">
                        {degree}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-center">In charge since {presbyterInCharge.dateOfCharge}</p>
                </div>

                {/* Right side - Brief Introduction */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-xl font-semibold mb-4 text-primary">About Our Presbyter-in-Charge</h4>
                  <p className="text-muted-foreground leading-relaxed">{presbyterInCharge.introduction}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Other Presbyters */}
          {otherPresbyters.map((presbyter) => (
            <Card key={presbyter.name} className="border-primary/10">
              <CardHeader className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={presbyter.image || "/placeholder.svg"}
                    alt={presbyter.name}
                    fill
                    className="object-cover rounded-full border-2 border-primary/50"
                  />
                </div>
                <CardTitle className="text-lg">{presbyter.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {presbyter.degrees.map((degree) => (
                    <Badge key={degree} variant="outline" className="text-xs">
                      {degree}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Since {presbyter.dateOfCharge}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

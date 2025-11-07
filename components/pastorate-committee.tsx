import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PastorateCommittee() {
  const committee = [
    {
      name: "Mr. Abraham Matthew",
      designation: "President",
      image: "/committee-president.jpg",
    },
    {
      name: "Mrs. Sarah David",
      designation: "Secretary",
      image: "/committee-secretary.jpg",
    },
    {
      name: "Mr. Joseph Thomas",
      designation: "Steward",
      image: "/committee-steward.jpg",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Pastorate Committee</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {committee.map((member) => (
            <Card key={member.name} className="text-center border-primary/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full border-2 border-primary/30"
                  />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium">{member.designation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

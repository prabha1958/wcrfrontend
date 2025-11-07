import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cake } from "lucide-react"

export function BirthdaysToday() {
  const birthdayMembers = [
    {
      name: "Mrs. Grace Johnson",
      image: "/elderly-woman-smiling.png",
      age: 65,
    },
    {
      name: "Mr. Daniel Thomas",
      image: "/middle-aged-man-contemplative.png",
      age: 42,
    },
    {
      name: "Miss Rebecca Wilson",
      image: "/young-woman-smiling.png",
      age: 28,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary flex items-center justify-center gap-2">
          <Cake className="h-8 w-8" />
          Born Today 🎂
        </h2>

        {birthdayMembers.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {birthdayMembers.map((member) => (
              <Card
                key={member.name}
                className="text-center border-primary/20 bg-gradient-to-br from-primary/5 to-accent/10 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="relative w-20 h-20 mx-auto mb-4">
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
                  <p className="text-primary font-medium">Celebrating {member.age} years!</p>
                  <p className="text-sm text-muted-foreground mt-2">May God bless you abundantly! 🎉</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="max-w-md mx-auto text-center border-primary/20">
            <CardContent className="py-8">
              <Cake className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No birthdays today</p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}

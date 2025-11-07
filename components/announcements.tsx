import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Megaphone, Calendar, Star } from "lucide-react"

export function Announcements() {
  const announcements = [
    {
      title: "Christmas Carol Service",
      date: "December 24, 2024",
      description: "Join us for a special Christmas Carol Service with the church choir and special guests.",
      type: "Special Event",
      priority: "high",
    },
    {
      title: "New Year Prayer Meeting",
      date: "December 31, 2024",
      description: "End the year with thanksgiving and begin the new year with prayers and blessings.",
      type: "Prayer Meeting",
      priority: "medium",
    },
    {
      title: "Youth Camp Registration",
      date: "January 15-17, 2025",
      description: "Annual youth camp registration is now open. Limited seats available.",
      type: "Youth Ministry",
      priority: "high",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary flex items-center justify-center gap-2">
          <Megaphone className="h-8 w-8" />
          Special Announcements
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <Card
              key={index}
              className={`border-l-4 hover:shadow-lg transition-shadow ${
                announcement.priority === "high"
                  ? "border-l-destructive bg-destructive/5"
                  : "border-l-primary bg-primary/5"
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg text-balance">{announcement.title}</CardTitle>
                  {announcement.priority === "high" && <Star className="h-5 w-5 text-destructive fill-destructive" />}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {announcement.date}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 text-pretty">{announcement.description}</p>
                <Badge variant="secondary">{announcement.type}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

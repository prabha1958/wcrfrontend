import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ChurchHistory() {
  const organizations = [
    "Women's Fellowship",
    "Youth Fellowship",
    "Sunday School",
    "Choir Ministry",
    "Prayer Warriors",
    "Evangelism Team",
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Heritage</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Brief History</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                  CSI Centenary Wesley Church, Ramkote, stands as a beacon of faith in the heart of Hyderabad.
                  Established over a century ago, our church has been serving the community with unwavering dedication
                  to spreading the Gospel of Jesus Christ. Through decades of faithful ministry, we have grown from a
                  small congregation to a vibrant community of believers.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Our church has witnessed countless testimonies of God's grace and has been instrumental in nurturing
                  spiritual growth, community service, and Christian fellowship. We continue to uphold the rich
                  traditions of the Church of South India while embracing modern approaches to ministry and outreach.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/church-building.png"
                alt="CSI Centenary Wesley Church Building"
                fill
                className="object-cover"
              />
            </div>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Church Organizations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {organizations.map((org) => (
                    <Badge key={org} variant="outline" className="border-primary/30">
                      {org}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PresbytersSection } from "@/components/presbyters-section"
import { PastorateCommittee } from "@/components/pastorate-committee"
import { ChurchInfo } from "@/components/church-info"
import { Announcements } from "@/components/announcements"
import { MensFellowship } from "@/components/mens-fellowship"
import { WomensFellowship } from "@/components/womens-fellowship"
import { PoorFeeding } from "@/components/poor-feeding"
import { ChurchHistory } from "@/components/church-history"
import { BirthdaysToday } from "@/components/birthdays-today"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div className="animate-fade-in-up [animation-delay:200ms]">
          <PresbytersSection />
        </div>
        <div className="animate-fade-in-up [animation-delay:400ms]">
          <PastorateCommittee />
        </div>
        <div className="animate-fade-in-up [animation-delay:600ms]">
          <ChurchInfo />
        </div>
        <div className="animate-fade-in-up [animation-delay:800ms]">
          <Announcements />
        </div>
        <div className="animate-fade-in-up [animation-delay:1000ms]">
          <MensFellowship />
        </div>
        <div className="animate-fade-in-up [animation-delay:1200ms]">
          <WomensFellowship />
        </div>
        <div className="animate-fade-in-up [animation-delay:1400ms]">
          <PoorFeeding />
        </div>
        <div className="animate-fade-in-up [animation-delay:1600ms]">
          <ChurchHistory />
        </div>
        <div className="animate-fade-in-up [animation-delay:1800ms]">
          <BirthdaysToday />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 animate-fade-in-up [animation-delay:2000ms]">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 CSI Centenary Wesley Church, Ramkote Hyderabad</p>
          <p className="text-sm text-primary-foreground/80">
            "Come, let us bow down in worship, let us kneel before the Lord our Maker" - Psalms 100:2
          </p>
        </div>
      </footer>
    </div>
  )
}

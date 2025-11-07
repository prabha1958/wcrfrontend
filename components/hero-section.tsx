import Image from "next/image"

export function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden"
      style={{ backgroundColor: "rgb(25,25,112)" }}
    >
      <div className="absolute top-4 left-4 z-20 animate-slide-in-left">
        <Image
          src="/images/csi-emblem.png"
          alt="CSI Emblem"
          width={80}
          height={80}
          className="lg:w-24 lg:h-24 drop-shadow-lg hover-scale"
        />
      </div>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in [animation-delay:300ms]">
        <Image
          src="/images/church-logo.png"
          alt="Church Logo"
          width={100}
          height={100}
          className="lg:w-28 lg:h-28 drop-shadow-lg hover-scale"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative h-full min-h-[600px] lg:min-h-[700px] flex flex-col lg:flex-row">
        {/* Church Image - Left Side on Desktop, Background on Mobile */}
        <div className="absolute lg:relative lg:w-1/2 inset-0 lg:inset-auto animate-fade-in [animation-delay:600ms]">
          <Image
            src="/images/church-building.png"
            alt="CSI Centenary Wesley Church Building"
            fill
            className="object-cover object-center lg:object-contain opacity-60 lg:opacity-70"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(25,25,112,0.4)" }}></div>
        </div>

        <div className="relative lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 lg:px-12 py-20 lg:py-0 z-10 animate-slide-in-right [animation-delay:400ms]">
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
              CSI Centenary Wesley Church
            </h1>
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-6 drop-shadow-xl">
              Palayamkottai
            </h2>
            <p className="text-lg lg:text-xl text-white leading-relaxed drop-shadow-lg">
              A place of worship, fellowship, and spiritual growth in the heart of our community.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-20 max-w-xs animate-slide-in-right [animation-delay:800ms]">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-xl border border-white/20 hover-lift">
          <p className="text-sm lg:text-base font-medium text-white text-center italic drop-shadow-lg">
            "Serve the Lord with gladness; come before His presence with singing."
          </p>
          <p className="text-xs lg:text-sm text-white/90 text-center mt-2 font-semibold drop-shadow-md">
            - Psalms 100:2
          </p>
        </div>
      </div>
    </section>
  )
}

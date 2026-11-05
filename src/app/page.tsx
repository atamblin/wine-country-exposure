import { Ab723 } from "@/components/home/ab723";
import { Brokerages } from "@/components/home/brokerages";
import { ClosingCta } from "@/components/home/closing-cta";
import { Hero } from "@/components/home/hero";
import { HomeMotion } from "@/components/home/home-motion";
import { HowItWorks } from "@/components/home/how-it-works";
import { Intro } from "@/components/home/intro";
import { PhotoWall } from "@/components/home/photo-wall";
import { ServiceArea } from "@/components/home/service-area";
import { Services } from "@/components/home/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HomeMotion>
        <main>
          <Hero />
          <Intro />
          <PhotoWall />
          <Services />
          <Brokerages />
          <HowItWorks />
          <ServiceArea />
          <Ab723 />
          <ClosingCta />
        </main>
      </HomeMotion>
      <SiteFooter />
    </>
  );
}

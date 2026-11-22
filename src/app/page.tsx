import { JsonLd } from "@/components/JsonLd";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Enquiry } from "@/components/sections/Enquiry";
import { Experiences } from "@/components/sections/Experiences";
import { Faq } from "@/components/sections/Faq";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { HowToBook } from "@/components/sections/HowToBook";
import { Location } from "@/components/sections/Location";
import { Rooms } from "@/components/sections/Rooms";
import { Welcome } from "@/components/sections/Welcome";
import { RevealObserver } from "@/components/ui/RevealObserver";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <div id="top" />
        <Hero />
        <Welcome />
        <Highlights />
        <Rooms />
        <Experiences />
        <Gallery />
        <Location />
        <HowToBook />
        <Faq />
        <Enquiry />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <RevealObserver />
    </>
  );
}

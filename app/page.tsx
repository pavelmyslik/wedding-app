import Accommodation from "@/app/components/Accomodation";
import LocationMap from "@/app/components/LocationMap";
import DressCode from "@/app/components/Dresscode";
import Navbar from "@/app/components/Navbar";
import Countdown from "@/app/components/Countdown";
import HeroSection from "@/app/components/HeroSection";
import Schedule from "@/app/components/Schedule";
import RsvpForm from "@/app/components/RSVP"

export default function Home() {
  return (
    <main className="bg-champagne text-black font-serif">
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="countdown">
        <Countdown />
      </section>
      <section id="schedule">
        <Schedule />
      </section>
      <section id="location">
        <LocationMap />
      </section>
      <section id="dresscode">
        <DressCode />
      </section>
      <section id="accommodation">
        <Accommodation />
      </section>
      <section id="rsvp">
        <RsvpForm />
      </section>

      <footer className="py-8 text-center text-sm text-white bg-black">
        &copy; 2025 Lucie & Pavel
      </footer>
    </main>
  );
}


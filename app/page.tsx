import Accommodation from "@/app/components/Accomodation";
import LocationMap from "@/app/components/LocationMap";
import DressCode from "@/app/components/Dresscode";

export default function Home() {
  return (
    <main className="bg-champagne text-black font-serif">
      <section id="hero" className="min-h-[60vh] bg-[url('/images/banner-lp.png')] bg-cover bg-center flex flex-col items-center justify-center text-center px-4r">
      </section>

      <LocationMap />
      <Accommodation />
      <DressCode />


      <footer className="py-8 text-center text-sm text-white bg-black">
        &copy; 2025 Lucie & Pavel
      </footer>
    </main>
  );
}

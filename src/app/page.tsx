import Link from "next/link";
import Image from "next/image";
import bgHeroHome from "@/images/bg-hero-home.png"
import Header from "@/components/Header";


export default function Home() {
  return (
    <main>
      <section className="section section-hero relative h-screen">
        <Header />
        <Image priority src={bgHeroHome} alt="hero image" className="absolute object-cover h-full w-full" quality={90} />
        <div className="row relative">
          <div className="container">

          </div>
        </div>
      </section>
    </main>
  );
}

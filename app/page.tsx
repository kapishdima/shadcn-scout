"use client";

import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import Silk from "@/components/Silk";

export default function Home() {
  return (
    <>
      <div className="absolute w-screen h-screen top-0 left-0">
        <Silk
          speed={1.2}
          scale={0.8}
          color="#3e2a50"
          noiseIntensity={1.1}
          rotation={3.3}
        />
      </div>
      <main className="min-h-screen bg-black text-white selection:bg-white/20 md:px-60 px-5">
        <Hero />
        <Features />
        <Footer />
      </main>
    </>
  );
}

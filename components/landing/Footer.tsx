"use client";

import { createClient } from "@/lib/supabase";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export function Footer() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <span className="font-mono text-sm text-muted-foreground"></span>
          </div>
          <div className="md:col-span-9 space-y-4">
            <footer>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-xl "
              >
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Want early access?
                </h2>
                <p className="text-zinc-400 mb-8">
                  Leave your email and we’ll notify you as soon as everything is
                  available 🚀
                </p>

                <WaitlistForm />

                <div className="mt-16 text-sm text-zinc-600">
                  &copy; {new Date().getFullYear()} shadcn/scout. Made with ❤️
                  by{" "}
                  <a href="https://x.com/kapish_dima">
                    <i>kapish_dima</i>
                  </a>
                </div>
              </motion.div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

const WaitlistForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const supabase = createClient();

  const startFireworks = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await supabase.from("waitlist").insert({ email });
    setLoading(false);
    setEmail("");
    startFireworks();
  };

  return (
    <form
      className="flex w-full max-w-sm items-start space-x-2"
      onSubmit={onSubmit}
    >
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
        <input
          type="email"
          placeholder="developer@example.com"
          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 pl-10 text-sm ring-offset-zinc-950 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 disabled:cursor-not-allowed disabled:opacity-50 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-zinc-200 h-10 px-4 py-2 cursor-pointer"
        disabled={loading}
      >
        Notify Me
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </form>
  );
};

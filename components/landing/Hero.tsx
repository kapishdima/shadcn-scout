"use client";

import { motion } from "framer-motion";
import { Copy, Terminal, Check, Radar, TriangleAlert } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Silk from "../Silk";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const fullCommand = "npx scout check";

  // Terminal state
  const [typedCommand, setTypedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [showSecondCommand, setShowSecondCommand] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedCommand(fullCommand.slice(0, i + 1));
      i++;
      if (i === fullCommand.length) {
        clearInterval(interval);
        setTimeout(() => setShowOutput(true), 600);
        setTimeout(() => setShowSecondCommand(true), 1500);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const onCopy = () => {
    navigator.clipboard.writeText(fullCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container relative z-10 ">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-light tracking-tight leading-[1.1] max-w-4xl"
            >
              Keep your shadcn components in sync with{" "}
              <span className="text-white font-bold">scout</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Scout monitors{" "}
              <span className="text-foreground font-medium">
                95+ shadcn registries
              </span>
              , tracks every change, and helps you update safely — without
              breaking your customizations.
            </motion.p>

            {/* Inline Command + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div
                className="md:w-1/3 w-full group inline-flex items-center justify-between gap-3 bg-zinc-900 border border-zinc-800 pl-5 pr-2 py-2.5 rounded-xl font-mono text-sm hover:border-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer shadow-lg"
                onClick={onCopy}
              >
                <div className="space-x-2">
                  <span className="text-blue-500">$</span>
                  <span className="text-zinc-300 group-hover:text-white transition-colors">
                    {fullCommand}
                  </span>
                </div>
                <button
                  className="ml-2 p-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors group-hover:scale-105"
                  aria-label="Copy command"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-zinc-400" />
                  )}
                </button>
              </div>
              {/* <a
                href="#email"
                className="text-muted-foreground hover:text-white transition-colors flex items-center gap-1 group/link"
              >
                Get notified when we launch&nbsp;🚀
                <span className="block w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover/link:opacity-100 transition-opacity ml-1" />
              </a> */}
            </motion.div>
          </div>

          {/* Terminal Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/50 bg-black/40 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-linear-to-b from-zinc-900/10 to-transparent pointer-events-none" />

            <div className="p-1 md:p-2">
              <div className="bg-[#0c0c0c] rounded-xl border border-white/5 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex items-center gap-1.5 opacity-40">
                    <Terminal className="w-3 h-3" />
                    <span className="text-xs font-mono">scout-cli</span>
                  </div>
                  <div className="w-12" /> {/* Spacer for centering */}
                </div>

                {/* Terminal Content */}
                <div className="p-3 md:p-6 font-mono text-sm space-y-4 min-h-80">
                  <div className="flex items-center gap-2 text-zinc-100">
                    <span className="text-blue-500">$</span>
                    <span>{typedCommand}</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className={cn(
                        "inline-block w-2.5 h-5 bg-zinc-500 align-middle",
                        showOutput || typedCommand.length < fullCommand.length
                          ? "hidden"
                          : "block"
                      )}
                    />
                  </div>

                  {showOutput && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-3"
                    >
                      {/* Analysis Steps */}
                      <div className="flex items-center gap-2">
                        <Check className="text-emerald-500 size-3" />
                        <span className="text-zinc-400">
                          Registry index updated
                        </span>
                        <span className="text-zinc-600 text-xs">
                          95 registries
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-emerald-500 size-3" />
                        <span className="text-zinc-400">
                          Checking local components...
                        </span>
                      </div>

                      {/* Updates Found */}
                      <div className="mt-4 pt-4 border-t border-dashed border-zinc-800">
                        <p className="flex items-center gap-x-2 text-yellow-500 mb-3 text-xs  font-semibold">
                          <TriangleAlert className="size-4" /> Update available
                        </p>

                        <div className="space-y-1">
                          <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="group flex items-center justify-between p-2 pl-1 md:pl-3 rounded-md hover:bg-white/5 transition-colors cursor-default"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-green-300">
                                + components/ui/card.tsx
                              </span>
                              <span className="text-xs text-zinc-500 hidden md:block">
                                ui.shadcn.com
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-red-500 text-xs px-2 py-0.5 ">
                                Breaking
                              </span>
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="group flex items-center justify-between p-2 pl-1 md:pl-3 rounded-md hover:bg-white/5 transition-colors cursor-default"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-red-300">
                                - components/ui/button.tsx
                              </span>
                              <span className="text-xs text-zinc-500 hidden md:block">
                                ui.shadcn.com
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-emerald-500 text-xs px-2 py-0.5 ">
                                Safe update
                              </span>
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Second Command Prompt */}
                      {showSecondCommand && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="pt-2 flex items-center gap-2 text-zinc-100"
                        >
                          <span className="text-blue-500">$</span>
                          <span>npx scout update card -p</span>
                          <span className="inline-block w-2.5 h-5 bg-zinc-500 align-middle animate-blink" />
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";

import { Bot, GitPullRequest, Radar, ShieldCheck } from "lucide-react";
import { ReactNode } from "react";
import { CodeBlock } from "./CodeBlock";

import antigravityLogo from "@/assets/logos/antigravity.svg";
import cursorLogo from "@/assets/logos/cursor.svg";
import vscodeLogo from "@/assets/logos/vscode.svg";
import windsurfLogo from "@/assets/logos/windsurf.svg";

interface FeatureSectionProps {
  number: ReactNode;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export const Features = () => {
  return (
    <div id="features">
      <FeatureSection
        number={<Radar className="w-30 h-30" />}
        title={
          <>
            Watches{" "}
            <span className="text-primary underline decoration-primary/30 underline-offset-4">
              all
            </span>{" "}
            shadcn registries
          </>
        }
        description="No more manual tracking. Scout monitors every registry in shadcn/directory — computing diffs between commits and knowing exactly what changed, file by file."
      >
        <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
          <Radar className="w-4 h-4" />
          <span>95+ registries monitored in real-time</span>
        </div>
      </FeatureSection>

      <FeatureSection
        number={<Bot className="w-30 h-30" />}
        title="AI-powered safe updates"
        description="Scout knows exactly what changed in component files. Pair it with your favorite AI agent (via MCP) to update components without losing your local customizations."
      >
        <CodeBlock>scout check button</CodeBlock>
        <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
          <Bot className="w-4 h-4" />
          <div className="flex items-center gap-x-2">
            <span>Works with </span>
            <div className="flex items-center gap-x-2">
              <div className="flex items-center justify-center size-10 rounded-full overflow-hidden">
                <Image
                  alt="Antigravity"
                  src={antigravityLogo}
                  height={32}
                  width={32}
                />
              </div>
              <div className="flex items-center justify-center size-10 rounded-full overflow-hidden">
                <Image src={cursorLogo} alt="Cursor" height={32} width={32} />
              </div>
              <div className="flex items-center justify-center size-10 rounded-full overflow-hidden">
                <Image src={vscodeLogo} alt="VSCode" height={32} width={32} />
              </div>
              <div className="flex items-center justify-center size-10 rounded-full overflow-hidden">
                <Image
                  src={windsurfLogo}
                  alt="Windsurf"
                  height={32}
                  width={32}
                />
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>

      <FeatureSection
        number={<ShieldCheck className="w-30 h-30" />}
        title="Registry health reports"
        description="Is that registry still maintained? Are there hidden issues? Scout reviews registries so you don't have to — health scores, maintenance status, and security flags."
      >
        <div className="mt-6 space-y-2">
          <div className="flex items-center gap-3 text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-muted-foreground">
              Actively maintained • Last commit 2 days ago
            </span>
          </div>
          {/* <div className="flex items-center gap-3 text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-muted-foreground">
              No known vulnerabilities
            </span>
          </div> */}
          <div className="flex items-center gap-3 text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-muted-foreground">
              Trusted by 1,200+ projects
            </span>
          </div>
        </div>
      </FeatureSection>

      <FeatureSection
        number={<GitPullRequest className="w-30 h-30" />}
        title="Automated pull requests"
        description="No time for manual updates? Connect your GitHub repo. When a registry releases an update, Scout creates a pull request with a clean diff."
      >
        <div className="mt-6 bg-terminal rounded-lg p-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <GitPullRequest className="w-4 h-4 text-emerald-500" />
            <span className="text-terminal-foreground">
              feat: update @8bitcn card component
            </span>
          </div>
          <p className="text-muted-foreground/70 mt-2 pl-6">
            +12 -8 in src/components/ui/card.tsx
          </p>
        </div>
      </FeatureSection>
    </div>
  );
};

const FeatureSection = ({
  number,
  title,
  description,
  children,
}: FeatureSectionProps) => {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <span className="font-mono text-sm text-muted-foreground">
              {number}
            </span>
          </div>
          <div className="md:col-span-9 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Button } from "@/components/ui/button.tsx";
import githubLogo from "@/assets/github-mark-white.svg"

type ProjectProps = {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
  githubLink: string;
}

export default function Project({ title, description, imageUrl, githubLink }: ProjectProps) {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          {title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            {description}
            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <Button asChild variant="link">
                  <a
                    target="_blank"
                    href={githubLink}
                    rel="noopener noreferrer"
                    className="text-foreground font-bold hover:underline"
                  >
                    <img
                      src={githubLogo}
                      alt="github-logo"
                      width={20}

                      height={20}
                    />
                    View on GitHub
                  </a>
                </Button>
              </div>

            </div>
          </div>
          <div className="relative mt-6 sm:mt-0">
            <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <img
                src={imageUrl}
                className="hidden rounded-[15px] dark:block"
                alt="payments illustration dark"
                width={1206}
                height={612}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
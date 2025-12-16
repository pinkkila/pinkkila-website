import React from "react";
import { Button } from "@/components/ui/button.tsx";
import githubLogo from "@/assets/github-mark-white.svg";
import { Badge } from "@/components/ui/badge.tsx";
import { ImgCarousel } from "@/components/ImgCarousel.tsx";
import type { TCarouselImg } from "@/lib/types.ts";

type ProjectProps = {
  title: string;
  description: React.ReactNode;
  stack: string[];
  carouselImages: TCarouselImg[];
  githubLink: string;
};

export default function Project({
  title,
  description,
  stack,
  carouselImages,
  githubLink,
}: ProjectProps) {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          {title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            {description}

            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <Badge variant="secondary" key={item}>
                  {item}
                </Badge>
              ))}
            </div>

          </div>
          <div className="relative mt-6 sm:mt-0">
            {carouselImages.length > 1 ? (
              <ImgCarousel carouselImages={carouselImages} />
            ) : (
              <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                <img
                  src={carouselImages[0].src}
                  alt={carouselImages[0].alt}
                  className="rounded-[15px]"
                  width={1206}
                  height={612}
                />
              </div>
            )}
          </div>
        </div>
        <div className="space-y-3">
          <Button asChild variant="link">
            <a
              target="_blank"
              href={githubLink}
              rel="noopener noreferrer"
              className="text-foreground font-bold hover:underline hover:text-accent-foreground"
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
    </section>
  );
}

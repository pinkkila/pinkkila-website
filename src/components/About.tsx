import { TextEffect } from "@/components/ui/text-effect.tsx";

export default function About() {
  return (
    <main className="pt-20 sm:px-10">
      <section className="py-10 md:py-22">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div>
              <TextEffectDelayH2 delay={0}>Full-Stack</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.2}>Java</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.3}>Spring Boot</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.4}>TypeScript</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.5}>React</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.6}>AWS</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.7}>Linux</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.8}>Learning</TextEffectDelayH2>
            </div>

            <div className="space-y-6">
              <TextEffectDelayP delay={0.6}>
                Hi, my name is Petteri — it’s great to have you visiting my
                portfolio!
              </TextEffectDelayP>

              <TextEffectDelayP delay={0.6}>
                I’m a software development student at Haaga-Helia University of
                Applied Sciences, specializing in full-stack web development. I
                have focused on building applications using Java with Spring
                Boot and TypeScript with React.
              </TextEffectDelayP>

              <TextEffectDelayP delay={0.7}>
                I have hands-on experience with AWS, CI/CD pipelines, automated
                testing, and Linux system administration. My studies have also
                covered penetration testing and network security, giving me a
                solid awareness of modern security challenges and the importance
                of building applications with security in mind.
              </TextEffectDelayP>

              <TextEffectDelayP delay={0.8}>
                In addition to my technical background, I hold a BBA in Sales
                and Marketing and have hands-on experience in sales, which has
                given me a strong understanding of business needs and a proven
                ability to deliver excellent customer service.
              </TextEffectDelayP>

              <TextEffectDelayP delay={0.9}>
                Outside of development, I play guitar, and I’m planning a return
                to the ice rink soon (my ice hockey hobby has been on pause for
                too long).
              </TextEffectDelayP>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TextEffectDelayH2({
  delay,
  children,
}: {
  delay: number;
  children: string;
}) {
  return (
    <TextEffect
      preset="fade-in-blur"
      speedSegment={0.3}
      delay={delay}
      as="h2"
      className="text-5xl font-medium"
    >
      {children}
    </TextEffect>
  );
}

function TextEffectDelayP({
  delay,
  children,
}: {
  delay: number;
  children: string;
}) {
  return (
    <TextEffect
      per="line"
      preset="fade-in-blur"
      speedSegment={0.3}
      delay={delay}
      as="p"
    >
      {children}
    </TextEffect>
  );
}

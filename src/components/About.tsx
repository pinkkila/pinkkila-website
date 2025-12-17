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
                Hi! My name is Petteri and I’m a software development student at
                Haaga-Helia University of Applied Sciences, specializing in
                full-stack web development.
              </TextEffectDelayP>

              <TextEffectDelayP delay={0.7}>
                In my studies and personal projects, I have focused on building
                applications using Java with Spring Boot and TypeScript with
                React. I have hands-on experience with AWS and have built CI/CD
                pipelines. I have implemented testing in my projects and have a
                solid foundation in Linux system administration. My studies have
                also covered penetration testing and network security, giving me
                a strong awareness of modern security challenges and the
                importance of building applications with security in mind.
              </TextEffectDelayP>

              <TextEffectDelayP delay={0.8}>
                I'm a fast and efficient learner. I have an average grade of
                4.91 in key/professional competence studies at Haaga-Helia.
              </TextEffectDelayP>

              <TextEffectDelayP delay={0.9}>
                I hold a BBA in Sales and Marketing and have hands-on experience
                in sales. I bring not only technical skills but also a strong
                understanding of business needs and a proven ability to provide
                excellent customer service.
              </TextEffectDelayP>

              <TextEffectDelayP delay={1}>
                In my free time, I play guitar and plan to return to playing
                ice-hockey in the near future.
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
      className="text-4xl font-medium"
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

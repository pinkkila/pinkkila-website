import { TextEffect } from "@/components/ui/text-effect.tsx";

export default function About() {
  return (
    <main className="pt-20 sm:px-10">
      <section className="py-10 md:py-22">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-12">
            <div>
              <TextEffectDelayH2 delay={0.1}>Full-Stack</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.2}>Java</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.3}>Spring Boot</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.4}>TypeScript</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.5}>React</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.6}>Next.js</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.7}>Tailwind CSS</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.8}>AWS</TextEffectDelayH2>
              <TextEffectDelayH2 delay={0.9}>Linux</TextEffectDelayH2>
            </div>

            <div className="space-y-6">
              <TextEffectDelayP delay={0.6}>
                Hi, my name is Petteri — it’s great to have you visiting my
                portfolio!
              </TextEffectDelayP>

              <TextEffectDelayP delay={0.6}>
                I am a full-stack developer who enjoys building reliable web
                applications that are secure, well-tested, and genuinely useful
                to the people who use them. I focus on understanding what's
                actually needed and making sure that's what I deliver.
              </TextEffectDelayP>

              <TextEffectDelayP delay={0.7}>
                I work across the web stack, from backend services and APIs to
                user interfaces. I also care about what it takes to get software
                safely into production: automated testing, CI/CD pipelines,
                containerized cloud deployments, and Linux environments.
              </TextEffectDelayP>

              <TextEffectDelayP delay={0.8}>
                Security is a particular interest of mine. I wrote my bachelor's
                thesis on OAuth 2.0 and OpenID Connect, and I've put that
                knowledge into practice by building a Backend for Frontend (BFF)
                architecture for authentication and authorization with Spring
                Boot and Next.js. I've also studied penetration testing and
                network security, which shapes how I approach building secure
                applications.
              </TextEffectDelayP>

              <TextEffectDelayP delay={0.9}>
                I hold bachelor's degrees in Business Information Technology
                (Software Development) and Business Administration (Sales and
                Marketing). My hands-on experience in sales has given me a
                strong understanding of business needs and experience working
                closely with customers.
              </TextEffectDelayP>

              <TextEffectDelayP delay={1.0}>
                Outside of development, I play guitar and enjoy music. I also
                play ice hockey, which is currently on pause, but I'm planning
                to return to it soon.
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

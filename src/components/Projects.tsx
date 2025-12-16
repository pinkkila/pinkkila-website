import React from "react";
import Project from "@/components/Project.tsx";
import { TextEffect } from "@/components/ui/text-effect.tsx";
import { AnimatedGroup } from "@/components/ui/animated-group.tsx";
import pinkkstore from "@/assets/pinkkstore-front-page.png";
import restDashboard from "@/assets/rest-dashboard.png";
import awsDiagram from "@/assets/aws-diagram.png";
import palvelintenHallinta from "@/assets/palvelinten-hallinta.png";
import tuntkeutumisTestaus from "@/assets/tunkeutumis-testaus.png";
import reactNative from "@/assets/react-native.png";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
} as const;

export default function Projects() {
  return (
    <main className="pt-30">
      {/*<h1 className="mx-auto max-w-4xl text-balance text-center text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">*/}
      {/*  Projects*/}
      {/*</h1>*/}

      <TextEffect
        preset="fade-in-blur"
        speedSegment={0.3}
        as="h1"
        className="mx-auto mt-8 max-w-4xl text-balance text-center text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
      >
        Projects
      </TextEffect>

      <AnimatedGroup
        variants={{
          container: {
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.75,
              },
            },
          },
          ...transitionVariants,
        }}
        className=""
      >
        <Project
          title="Webstore Platform Project"
          description={
            <>
              <p className="text-muted-foreground">
                Full-stack web app with{" "}
                <Highlight>Backend for Frontend (BFF)</Highlight> architecture.
                It uses multiple <Highlight>Spring Boot</Highlight> services,
                and authentication and authorization are handled via
                <Highlight> OAuth2</Highlight> and{" "}
                <Highlight>OpenID Connect</Highlight>.
              </p>
              <p className="text-muted-foreground">
                The frontend is implemented with <Highlight>Next.js</Highlight>,
                combining server and client components, and styled using{" "}
                <Highlight>shadcn/ui</Highlight> and{" "}
                <Highlight>Tailwind CSS</Highlight>. Data fetching is handled
                through a mix of server components and
                <Highlight> TanStack Query </Highlight>
                for caching, prefetching, loading states and error handling.
              </p>
            </>
          }
          stack={[
            "Java",
            "Spring Boot",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "shadcn/ui",
            "TanStack Query",
            "OAuth2",
            "OpenID Connect",
            "BFF",
            "Authorization Server",
            "Resource Server",
            "REST API",
            "PostgreSQL",
          ]}
          imageUrl={pinkkstore}
          carouselImages={[
            {
              src: pinkkstore,
              alt: "PinkkStore",
            },
            {
              src: restDashboard,
              alt: "Dashboard",
            },
          ]}
          githubLink="https://github.com/pinkkila/pinkkstore"
        />

        <Project
          title="REST API and Dashboard exercise"
          description={
            <>
              <p className="text-muted-foreground">
                The backend is a <Highlight>REST API</Highlight> built with{" "}
                <Highlight>Spring Boot</Highlight>, supporting sorting,
                pagination, and filtering through query parameters. The project
                includes comprehensive <Highlight>testing</Highlight> examples,
                such as unit tests, JSON serialization tests, controller tests,
                JDBC tests, and full integration/end-to-end tests.
              </p>
              <p className="text-muted-foreground">
                The frontend is a dashboard build with{" "}
                <Highlight>React</Highlight> and styled with{" "}
                <Highlight>Tailwind CSS </Highlight>
                and <Highlight>shadcn/ui</Highlight>. Data fetching is handled
                with <Highlight>TanStack Query</Highlight>, providing efficient
                caching as well as built-in loading and error handling.
              </p>
            </>
          }
          stack={[
            "Java",
            "Spring Boot",
            "TypeScript",
            "React",
            "Vite",
            "Tailwind CSS",
            "shadcn/ui",
            "TanStack Query",
            "REST API",
            "SQL",
            "PostgreSQL",
            "Testing",
          ]}
          imageUrl={restDashboard}
          carouselImages={[{ src: restDashboard, alt: "Dash" }]}
          githubLink="https://github.com/pinkkila/dev-academy-spring-2025-exercise"
        />

        <Project
          title="AWS GitHub CI/CD project"
          description={
            <>
              <p className="text-muted-foreground">
                The accompanying documentation walks through building a{" "}
                <Highlight>CI/CD </Highlight>
                pipeline for a containerized application using{" "}
                <Highlight>GitHub Actions</Highlight> and deploying it to{" "}
                <Highlight>AWS Elastic Container Service (ECS)</Highlight> with{" "}
                <Highlight>Fargate</Highlight>.
              </p>
              <p className="text-muted-foreground">
                The documentation includes integration with{" "}
                <Highlight>AWS RDS</Highlight> for database hosting and{" "}
                <Highlight>AWS Secrets Manager</Highlight> for credential
                management, including automatic secret rotation using{" "}
                <Highlight>AWS Lambda</Highlight>. The pipeline uses{" "}
                <Highlight>GitHub’s OpenID Connect (OIDC) provider</Highlight>{" "}
                to enable authentication between GitHub Actions and AWS.
              </p>
            </>
          }
          stack={[
            "AWS",
            "GitHub Actions",
            "CI/CD",
            "Docker",
            "OpenID Connect",
            "Spring Boot",
            "PostgreSQL",
          ]}
          imageUrl={awsDiagram}
          carouselImages={[]}
          githubLink="https://github.com/pinkkila/stories"
        />

        <Project
          title="Palvelinten Hallinta - Homework Reports"
          description={
            <>
              <p className="text-muted-foreground">
                Homework reports for Palvelinten Hallinta (Configuration
                Management Systems) course taught by Tero Karvinen.
              </p>
              <p className="text-muted-foreground">
                In this course, I gained hands-on experience with{" "}
                <Highlight>Infrastructure as Code (IaC)</Highlight> and
                automation for{" "}
                <Highlight>Linux system administration</Highlight>. Achieved
                grade 5/5.
              </p>
            </>
          }
          stack={["Linux", "Salt", "Vagrant", "IaC"]}
          imageUrl={palvelintenHallinta}
          carouselImages={[]}
          githubLink="https://github.com/pinkkila/palvelinten-hallinta"
        />

        <Project
          title="Tunkeutumistestaus - Homework Reports"
          description={
            <>
              <p className="text-muted-foreground">
                Homework reports for the Tunkeutumistestaus (Penetration
                Testing) course taught by Tero Karvinen.
              </p>
              <p className="text-muted-foreground">
                The reports cover <Highlight>penetration testing</Highlight>{" "}
                tasks such as service enumeration, fuzzing, proxy-based
                inspection, and exploitation of common web vulnerabilities (
                <Highlight>XSS</Highlight>, <Highlight>SQLi</Highlight>,{" "}
                <Highlight>IDOR</Highlight>, <Highlight>SSRF</Highlight>,{" "}
                <Highlight>SSTI</Highlight>). Tools used include{" "}
                <Highlight>nmap</Highlight>, <Highlight>masscan</Highlight>,
                <Highlight>ffuf</Highlight>, <Highlight>OWASP ZAP</Highlight>,{" "}
                <Highlight>mitmproxy</Highlight>,{" "}
                <Highlight>msfvenom</Highlight>,
                <Highlight>Metasploit</Highlight>,{" "}
                <Highlight>Hashcat</Highlight>,{" "}
                <Highlight>John the Ripper</Highlight> and{" "}
                <Highlight>pencode</Highlight>. Achieved grade 5/5.
              </p>
            </>
          }
          stack={[
            "Kali Linux",
            "Penetration Testing",
            "nmap",
            "masscan",
            "ffuf",
            "OWASP ZAP",
            "mitmproxy",
            "msfvenom",
            "Metasploit",
            "Hashcat",
            "John the Ripper",
            "pencode",
          ]}
          imageUrl={tuntkeutumisTestaus}
          carouselImages={[]}
          githubLink="https://github.com/pinkkila/tunkeutumistestaus"
        />

        <Project
          title="Vocabulary Practice App"
          description={
            <>
              <p className="text-muted-foreground">
                A <Highlight>React Native</Highlight> app for practicing
                vocabulary in a simple game-like way.
              </p>
              <p className="text-muted-foreground">
                Word list can be imported as CSV. Translations can be from your
                own list, or you can use the optional{" "}
                <Highlight>ChatGPT</Highlight> feature to generate them.
              </p>
            </>
          }
          stack={[
            "TypeScript",
            "React Native",
            "CSS",
            "Expo",
            "SQLite",
            "OpenAI API",
          ]}
          imageUrl={reactNative}
          carouselImages={[]}
          githubLink="https://github.com/pinkkila/tunkeutumistestaus"
        />
      </AnimatedGroup>
    </main>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground font-medium">{children}</span>;
}

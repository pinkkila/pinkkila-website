// import React from "react";
import Project from "@/components/Project.tsx";
import { TextEffect } from "@/components/ui/text-effect.tsx";
import { AnimatedGroup } from "@/components/ui/animated-group.tsx";
import pinkkstore from "@/assets/pinkkstore-front-page.png";
import pinkkstoreCategories from "@/assets/pinkkstore-categories.png";
import pinkkstoreCart from "@/assets/pinkkstore-cart.png";
import restDashboard from "@/assets/rest-dashboard.png";
import restDashboardDay from "@/assets/rest-dashboard-day.png";
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
    <main className="pt-30 sm:px-10">
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
              <p className="text-foreground/88">
                The project consists of a customer-facing webstore and a CRM
                application*, both developed as independent applications within
                a single monorepo. Both applications follow a Backend for
                Frontend (BFF) pattern implemented with Spring Boot, and each
                includes its own frontend, BFF, authorization server, resource
                server, and reverse proxy. Authentication and authorization are
                handled via OAuth2 and OpenID Connect through dedicated
                authorization servers, while protected REST APIs are exposed by
                resource servers backed by PostgreSQL.
              </p>
              <p className="text-foreground/88">
                The frontend (store) is implemented with Next.js and styled
                using shadcn/ui and Tailwind CSS. Data fetching is handled
                through a mix of server components and TanStack Query for
                caching, prefetching, and loading/error handling. The BFF
                manages user sessions and OAuth tokens, ensuring the browser
                never handles tokens directly. A reverse proxy service unifies
                the frontend and BFF under one origin, avoids CORS issues, and
                enables secure cookie handling.
              </p>
              <p className="text-muted-foreground/80 text-sm font-light -mt-2">
                *CRM is in progress and contains only initial code.
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
            "RabbitMQ",
          ]}
          carouselImages={[
            {
              src: pinkkstore,
              alt: "PinkkStore frontpage image",
            },
            {
              src: pinkkstoreCategories,
              alt: "PinkkStore categories image",
            },
            {
              src: pinkkstoreCart,
              alt: "PinkkStore cart image",
            },
          ]}
          githubLink="https://github.com/pinkkila/pinkkstore"
        />

        <Project
          title="REST API and Dashboard exercise"
          description={
            <>
              <p className="text-foreground/88">
                This project is a REST API and dashboard application for
                exploring electricity data. The backend is built with Spring
                Boot and provides endpoints with sorting, pagination, and
                filtering, along with comprehensive testing (unit, controller,
                JSON serialization, JDBC, and integration/end-to-end tests).
              </p>
              <p className="text-foreground/88">
                The frontend is a dashboard build with React and styled with
                Tailwind CSS and shadcn/ui. Data fetching is handled with
                TanStack Query, providing caching and loading/error handling.
              </p>
              <p className="text-foreground/88">
                On the database side, I implemented a PostgreSQL view that
                aggregates hourly electricity data into daily metrics, including
                total production and consumption, average prices, and sequences
                of consecutive negative prices.{" "}
              </p>
              <p className="text-foreground/88">
                The project is currently deployed at{" "}
                <a
                  target="_blank"
                  href="https://dev.pinkkila.com"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium hover:underline hover:text-accent-foreground"
                >
                  dev.pinkkila.com
                </a>
                . The app is designed for desktop use only.
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
            "Docker",
          ]}
          carouselImages={[
            { src: restDashboard, alt: "Rest API & Dashboard image" },
            { src: restDashboardDay, alt: "Rest API & Dashboard Day image" },
          ]}
          githubLink="https://github.com/pinkkila/dev-academy-spring-2025-exercise"
        />

        <Project
          title="AWS GitHub CI/CD project"
          description={
            <>
              <p className="text-foreground/88">
                The purpose of this project was to implement a CI/CD pipeline
                and document the process. The accompanying documentation walks
                through building a CI/CD pipeline for a containerized
                application using GitHub Actions and deploying it to AWS Elastic
                Container Service (ECS) with Fargate.
              </p>
              <p className="text-foreground/88">
                The documentation includes integration with AWS RDS for database
                hosting and AWS Secrets Manager for credential management,
                including automatic secret rotation using AWS Lambda. The
                pipeline uses GitHub’s OpenID Connect (OIDC) provider to enable
                authentication between GitHub Actions and AWS.
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
          carouselImages={[{ src: awsDiagram, alt: "AWS Diagram Image" }]}
          githubLink="https://github.com/pinkkila/stories"
        />

        <Project
          title="Palvelinten Hallinta - Homework Reports"
          description={
            <>
              <p className="text-foreground/88">
                Homework reports for Palvelinten Hallinta (Configuration
                Management Systems) course taught by Tero Karvinen.
              </p>
              <p className="text-foreground/88">
                The course focused on Infrastructure as Code (IaC) and
                automation for Linux system administration. The work
                demonstrates configuring Linux servers and services using Salt,
                as well as building reproducible environments with Vagrant.
              </p>
              <p className="text-foreground/88">
                The coursework emphasizes key configuration management
                principles such as idempotency and single source of truth, while
                strengthening practical skills in Linux system administration
                and troubleshooting.
              </p>
            </>
          }
          stack={["Linux", "Salt", "Vagrant", "IaC"]}
          carouselImages={[
            {
              src: palvelintenHallinta,
              alt: "Palvelinten Hallinta Image",
            },
          ]}
          githubLink="https://github.com/pinkkila/palvelinten-hallinta"
        />

        <Project
          title="Tunkeutumistestaus - Homework Reports"
          description={
            <>
              <p className="text-foreground/88">
                Homework reports for the Tunkeutumistestaus (Penetration
                Testing) course taught by Tero Karvinen.
              </p>
              <p className="text-foreground/88">
                The course included vulnerability scanning and network/service
                enumeration, as well as testing for common web application
                vulnerabilities such as XSS, SQL injection, path traversal,
                IDOR, SSRF, and SSTI. Exercises also covered proxy-based
                testing, traffic analysis, automated fuzzing, password and hash
                cracking, and custom exploit development.
              </p>
              <p className="text-foreground/88">
                Tools and frameworks used include nmap, masscan, ffuf, OWASP
                ZAP, mitmproxy, msfvenom, Metasploit, Hashcat, John the Ripper,
                and pencode. The reports demonstrate practical skills in
                identifying and exploiting security issues in a controlled
                environment.
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
          carouselImages={[
            { src: tuntkeutumisTestaus, alt: "Tunkeutumistestaus Image" },
          ]}
          githubLink="https://github.com/pinkkila/tunkeutumistestaus"
        />

        <Project
          title="Vocabulary Practice App"
          description={
            <>
              <p className="text-foreground/88">
                A React Native app for practicing vocabulary in a simple,
                game-like way. Users can import word lists as CSV files and use
                their own translations or generate them using OpenAI's ChatGPT
                API.
              </p>
              <p className="text-foreground/88">
                The app is built with Expo and uses SQLite for local storage,
                Expo Router for navigation, and Expo DocumentPicker and
                FileSystem for importing and managing word lists.
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
          carouselImages={[
            { src: reactNative, alt: "Vocabulary Practice App image" },
          ]}
          githubLink="https://github.com/pinkkila/tunkeutumistestaus"
        />
      </AnimatedGroup>
    </main>
  );
}

// function Highlight({ children }: { children: React.ReactNode }) {
//   return <span className="text-foreground font-medium">{children}</span>;
// }

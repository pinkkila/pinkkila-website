import Project from "@/components/project.tsx";
import pinkkstore from "@/assets/pinkkstore-front-page.png";
import restDashboard from "@/assets/rest-dashboard.png";
import awsDiagram from "@/assets/aws-diagram.png";
import palvelintenHallinta from "@/assets/palvelinten-hallinta.png";
import tuntkeutumisTestaus from "@/assets/tunkeutumis-testaus.png";
import reactNative from "@/assets/react-native.png";

export default function Projects() {
  return (
    <main>
      <Project
        title="Webstore Platform Project"
        description={
          <>
            <p className="text-muted-foreground">
              Full-stack web app with{" "}
              <span className="text-foreground font-bold">
                Backend for Frontend
              </span>{" "}
              architecture. It uses multiple{" "}
              <span className="text-foreground font-bold">Spring Boot</span>{" "}
              services, and authentication and authorization are handled via
              <span className="text-foreground font-bold">
                OAuth2 and OpenID Connect
              </span>
              .
            </p>
            <p className="text-muted-foreground">
              The frontend is implemented with{" "}
              <span className="text-foreground font-bold">Next.js</span>,
              combining server and client components, and styled using{" "}
              <span className="text-foreground font-bold">shadcn/ui</span> and{" "}
              <span className="text-foreground font-bold">Tailwind CSS</span>.
              Data fetching is handled through a mix of server components and
              <span className="text-foreground font-bold">TanStack Query </span>
              for caching, prefetching, loading states and error handling.
            </p>
          </>
        }
        imageUrl={pinkkstore}
        githubLink="https://github.com/pinkkila/pinkkstore"
      />

      <Project
        title="REST API and Dashboard exercise"
        description={
          <>
            <p className="text-muted-foreground">
              The backend is a REST API built with Spring Boot, supporting
              sorting, pagination, and filtering through query parameters. The
              project includes comprehensive testing examples, such as unit
              tests, JSON serialization tests, controller tests, JDBC tests, and
              full integration/end-to-end tests.
            </p>
            <p className="text-muted-foreground">
              The frontend is a React-based dashboard styled with Tailwind CSS
              and shadcn/ui. Data fetching is handled with TanStack Query,
              providing efficient caching as well as built-in loading and error
              handling.
            </p>
          </>
        }
        imageUrl={restDashboard}
        githubLink="https://github.com/pinkkila/dev-academy-spring-2025-exercise"
      />

      <Project
        title="AWS GitHub CI/CD project"
        description={
          <>
            <p className="text-muted-foreground">
              The accompanying documentation walks through building a CI/CD
              pipeline for a containerized application using GitHub Actions and
              deploying it to AWS Elastic Container Service (ECS) with Fargate.
            </p>
            <p className="text-muted-foreground">
              The documentation includes integration with Amazon RDS for
              database hosting and AWS Secrets Manager for credential
              management, including automatic secret rotation using AWS Lambda.
              The pipeline uses GitHub’s OpenID Connect (OIDC) provider to
              enable authentication between GitHub Actions and AWS.
            </p>
          </>
        }
        imageUrl={awsDiagram}
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
              In this course, I gained hands-on experience with Infrastructure
              as Code (IaC) and automation for Linux system administration.
              Achieved grade 5/5.
            </p>
          </>
        }
        imageUrl={palvelintenHallinta}
        githubLink="https://github.com/pinkkila/palvelinten-hallinta"
      />

      <Project
        title="Tunkeutumistestaus - Homework Reports"
        description={
          <>
            <p className="text-muted-foreground">
              Homework reports for the Tunkeutumistestaus (Penetration Testing)
              course taught by Tero Karvinen.
            </p>
            <p className="text-muted-foreground">
              The reports cover penetration testing tasks such as service
              enumeration, fuzzing, proxy-based inspection, and exploitation of
              common web vulnerabilities (XSS, SQLi, IDOR, SSRF, SSTI). Tools
              used include nmap, ffuf, ZAP, mitmproxy, Hashcat, John the Ripper,
              and Metasploit. Achieved grade 5/5.
            </p>
          </>
        }
        imageUrl={tuntkeutumisTestaus}
        githubLink="https://github.com/pinkkila/tunkeutumistestaus"
      />

      <Project
        title="Vocabulary Practice App"
        description={
          <>
            <p className="text-muted-foreground">
              A React Native app for practicing vocabulary in a simple game-like
              way.
            </p>
            <p className="text-muted-foreground">
              Word list can be imported as CSV. Translations can be from your
              own list, or you can use the optional ChatGPT feature to generate
              them.
            </p>
          </>
        }
        imageUrl={reactNative}
        githubLink="https://github.com/pinkkila/tunkeutumistestaus"
      />
    </main>
  );
}

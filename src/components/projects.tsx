import Project from "@/components/project.tsx";
import pinkkstore from "@/assets/pinkkstore-front-page.png"

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
            </p></>
        }
        imageUrl={pinkkstore}
        githubLink="https://github.com/pinkkila/pinkkstore"
      />
    </main>
  );
}

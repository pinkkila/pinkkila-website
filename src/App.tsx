import {Header} from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";
import Hero from "@/components/hero.tsx";
import { Route, Routes } from "react-router";
import Projects from "@/components/projects.tsx";
import About from "@/components/about.tsx";

export default function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Routes >
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  )
}


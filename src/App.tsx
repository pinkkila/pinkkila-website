import {Header} from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import Hero from "@/components/Hero.tsx";
import { Route, Routes } from "react-router";
import Projects from "@/components/Projects.tsx";
import About from "@/components/About.tsx";

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


import {Header} from "@/components/header.tsx";
import Footer from "@/components/footer.tsx";
import Hero from "@/components/hero.tsx";

export default function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  )
}


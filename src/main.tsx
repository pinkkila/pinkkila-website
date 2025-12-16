import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from "@/App.tsx";
import { ScrollToTop } from "@/components/Scroll.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)

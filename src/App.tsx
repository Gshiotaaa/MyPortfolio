import { useEffect, useRef, useState } from "react";
import useScrollSnap from "react-use-scroll-snap";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ViewPortProvider } from "./context/ViewPortContext";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

export function App() {
  const scrollRef = useRef(null);

  const [width, setWidth] = useState<number>(window.innerWidth);

  function getWidthViewPort() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    getWidthViewPort();
  }, []);

  {
    width > 1270
      ? useScrollSnap({ ref: scrollRef, duration: 1, delay: 1 })
      : useScrollSnap({ ref: null });
  }

  return (
    <ViewPortProvider>
      <Header />
      <div className="flex flex-col items-center gap-2  " ref={scrollRef}>
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </ViewPortProvider>
  );
}

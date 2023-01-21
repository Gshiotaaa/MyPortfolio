import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export function App() {
  return (
    <div className=" bg-black flex flex-col items-center">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />

      <Footer />
    </div>
  );
}

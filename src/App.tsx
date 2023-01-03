import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";

export function App() {
  return (
    <body className="w-screen  bg-black flex flex-col items-center">
      <Header />
      <AboutMe />
      <Skills />
    </body>
  );
}

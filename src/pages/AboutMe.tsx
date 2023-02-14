import { ArrowDown, GithubLogo, LinkedinLogo } from "phosphor-react";
import { useContext, useRef } from "react";
import imgAboutMe from "../assets/imgAboutMe2.jpg";
import { ViewPortContext } from "../context/ViewPortContext";

import { motion } from "framer-motion";

export function AboutMe() {
  const home = useRef(null);
  const { setVisibleSection } = useContext(ViewPortContext);

  return (
    <motion.div
      ref={home}
      id="Home"
      className="w-full lg:h-screen flex flex-col items-center pt-52 pb-24 lg:py-0 "
      onViewportEnter={() =>
        setVisibleSection((prevState) => ({
          ...prevState,
          home: true,
        }))
      }
      onViewportLeave={() =>
        setVisibleSection((prevState) => ({
          ...prevState,
          home: false,
        }))
      }
    >
      <div className="h-full w-full flex lg:justify-around justify-center items-center lg:border-b-[1px] border-zinc-900">
        <div className="flex flex-col justify-start items-center lg:items-start  w-[512px] text-center lg:text-start text-white font-roboto gap-3   ">
          <h1 className="font-semibold text-4xl">Gabriel Shiota</h1>
          <h3 className="font-medium text-2xl mt-3 border-b-[1px] border-sky-400	">
            Frontend Developer
          </h3>
          <p className="text-xl text-gray-400">
            Estudante de Ciência da computação com foco em Desenvolvimento Web.
          </p>
          <p className="text-xl text-gray-400">
            Desenvolvimento de interfaces para web utilizando JavaScript e seus
            Frameworks.
          </p>

          <nav className="mt-4 flex gap-3">
            <a href="https://github.com/Gshiotaaa" target="_blank">
              <GithubLogo size={32} color="#47E0FF" />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-nogueira-shiota-8aa492203/"
              target="_blank"
            >
              <LinkedinLogo size={32} color="#47E0FF" className="ml-[50%]" />
            </a>
          </nav>
        </div>
        <div>
          <img
            src={imgAboutMe}
            alt="Imagem em cartoon de Gabriel Shiota com efeitos e fundo cinza claro"
            className="h-96 w-96 hidden lg:block rounded-lg border-[2px] border-sky-400 object-cover"
          />
        </div>
      </div>
      <a href="#Skills">
        <ArrowDown
          size={32}
          color="#47e0ff"
          weight="bold"
          className="animate-bounce mt-[-60px] hidden xl:block"
        />
      </a>
    </motion.div>
  );
}

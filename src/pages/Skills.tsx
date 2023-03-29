import { motion } from "framer-motion";
import { ArrowDown } from "phosphor-react";
import { useContext, useRef } from "react";

import { SkillsDescription } from "../components/SkillsDescription";
import { SkillsDescriptionForMobile } from "../components/SkillsDescriptionForMobile";

import { ViewPortContext } from "../context/ViewPortContext";

import cssIcon from "../assets/stacksImage/cssIcon.png";
import htmlIcon from "../assets/stacksImage/htmlIcon.jpg";
import javascriptIcon from "../assets/stacksImage/javascriptIcon.png";
import reactIcon from "../assets/stacksImage/reactIcon.png";
import typescriptIcon from "../assets/stacksImage/tsIcon.png";

export function Skills() {
  const stacks = [
    {
      name: "HTML",
      img: htmlIcon,
      description:
        "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.",
    },
    {
      name: "CSS",
      img: cssIcon,
      description:
        "CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML.",
    },
    {
      name: "JavaScript",
      img: javascriptIcon,
      description:
        "JavaScript é uma linguagem de script orientada a objetos, multiplataforma. Dentro de um ambiente de host, o JavaScript pode ser ligado aos objetos deste ambiente para prover um controle programático sobre eles.",
    },
    {
      name: "TypeScript",
      img: typescriptIcon,
      description:
        "Typescript é uma linguagem de código aberto que foi construída em cima do Javascript. Então esse “superset” foi criado para adicionar recursos de tipagem estáticas à linguagem original.",
    },
    {
      name: "React",
      img: reactIcon,
      description:
        "O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”.",
    },
  ];

  const skills = useRef(null);
  const { setVisibleSection } = useContext(ViewPortContext);

  return (
    <motion.div
      ref={skills}
      id="Skills"
      className="w-full h-screen flex flex-col items-center "
      onViewportEnter={() =>
        setVisibleSection((prevState) => ({
          ...prevState,
          skills: true,
        }))
      }
      onViewportLeave={() =>
        setVisibleSection((prevState) => ({
          ...prevState,
          skills: false,
        }))
      }
    >
      <div className="w-full h-full  flex flex-col items-center justify-center gap-10 text-white lg:border-b-[1px] border-zinc-900 ">
        <h1 className="text-6xl">Hard Skills</h1>
        <div>
          <div className="flex max-w-[240px] relative overflow-hidden sm:hidden ">
            <SkillsDescriptionForMobile stacks={stacks} />
          </div>
          <div className="flex gap-4 max-sm:hidden max-lg:grid max-lg:grid-cols-3">
            {stacks.map((stack) => (
              <SkillsDescription
                key={stack.name}
                nameStack={stack.name}
                img={stack.img}
                title={stack.name}
                description={stack.description}
              />
            ))}
          </div>
        </div>
        <p className="text-lg opacity-40 hidden xl:block">
          Passe o mouse sob as tecnologias.
        </p>
      </div>
      <a href="#Projects">
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

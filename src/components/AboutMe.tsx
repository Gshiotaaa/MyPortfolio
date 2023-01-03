import { GithubLogo, LinkedinLogo } from "phosphor-react";
import imgAboutMe from "../assets/imgAboutMe.jpg";

export function AboutMe() {
  return (
    <div className="w-full h-screen flex justify-around items-center ">
      <div className="flex flex-col justify-start  text-white font-roboto gap-3 max-w-xl ">
        <h1 className="font-semibold text-4xl">Gabriel Shiota</h1>
        <h3 className="font-medium text-2xl mt-3">Desenvolvedor Web</h3>
        <p className="text-xl text-gray-400">
          Estudante de ciência da computação, com estudos focados para
          desenvolvimento web.
        </p>
        <p className="text-xl text-gray-400">
          Buscando a primeira oportunidade para aplicação de técnicas e estudos
          desenvolvidos em aplicações e materiais.
        </p>
        <nav className="mt-4 flex gap-3">
          <a href="https://github.com/Gshiotaaa" target="_blank">
            <GithubLogo size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-nogueira-shiota-8aa492203/"
            target="_blank"
          >
            <LinkedinLogo size={32} />
          </a>
        </nav>
      </div>
      <div>
        <img src={imgAboutMe} alt="" className="h-96 w-96 rounded-full" />
      </div>
    </div>
  );
}

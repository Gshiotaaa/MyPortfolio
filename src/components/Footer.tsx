import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
  return (
    <footer className=" my-10 flex flex-col items-center text-white">
      <div className="w-3/6 flex items-center flex-col gap-4">
        <h1 className="text-3xl">Contato</h1>
        <p>
          Gostou do que viu por aqui? Entre em contato comigo por algum destes
          meios de contato e vamos bater um papo! Estou em busca de
          oportunidades para aplicar os meus conhecimentos e técnicas
          desenvolvidas através de estudos.
        </p>
      </div>
      <section className="flex">
        <a href="https://github.com/Gshiotaaa" target="_blank">
          <GithubLogo size={32} color="#47E0FF" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-nogueira-shiota-8aa492203/"
          target="_blank"
        >
          <LinkedinLogo size={32} color="#47E0FF" />
        </a>
      </section>
    </footer>
  );
}

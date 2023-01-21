import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
  return (
    <footer className=" my-10 flex flex-col items-center text-white">
      <div className="w-3/6 flex items-center flex-col gap-4">
        <h1 className="text-3xl">Contato</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At eligendi
          porro veritatis dignissimos. Quae similique fugiat recusandae commodi
          quaerat velit repellendus iste quibusdam voluptates est? Quod
          quibusdam similique vero exercitationem!
        </p>
      </div>
      <section className="flex">
        <a href="https://github.com/Gshiotaaa" target="_blank">
          <GithubLogo size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-nogueira-shiota-8aa492203/"
          target="_blank"
        >
          <LinkedinLogo size={32} />
        </a>
      </section>
    </footer>
  );
}

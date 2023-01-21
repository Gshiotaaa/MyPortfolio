import { SkillsDescription } from "./SkillsDescription";

export function Skills() {
  const stacks = [
    {
      name: "HTML",
      img: "https://icon-library.com/images/html5-icon/html5-icon-13.jpg",
      description:
        "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.",
    },
    {
      name: "CSS",
      img: "https://logospng.org/download/css-3/logo-css-3-1536.png",
      description:
        "CSS é a sigla para Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código criado por linguagens como HTML, XML ou XHTML.",
    },
    {
      name: "JavaScript",
      img: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
      description:
        "JavaScript é uma linguagem de script orientada a objetos, multiplataforma. Dentro de um ambiente de host, o JavaScript pode ser ligado aos objetos deste ambiente para prover um controle programático sobre eles.",
    },
    {
      name: "TypeScript",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      description:
        "Typescript é uma linguagem de código aberto que foi construída em cima do Javascript. Então esse “superset” foi criado para adicionar recursos de tipagem estáticas à linguagem original.",
    },
    {
      name: "React",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      description:
        "O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”.",
    },
  ];

  return (
    <div className="h-screen xl:h-auto w-full flex flex-col items-center justify-center border-b-[1px] border-zinc-900 ">
      <div className="w-full flex flex-col items-center gap-10 text-white ">
        <h1 className="text-6xl">Hard Skills</h1>
        <div
          className="flex gap-6 xl:flex-col
         rounded-lg"
        >
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
    </div>
  );
}

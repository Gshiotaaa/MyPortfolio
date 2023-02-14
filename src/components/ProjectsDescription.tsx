import clsx from "clsx";

interface ProjectsDescriptionProps {
  name: string;
  html_url: string;
  language: string;
  created_at: Date;
}

export function ProjectsDescription({
  name,
  html_url,
  language,
  created_at,
}: ProjectsDescriptionProps) {
  return (
    <div
      key={name}
      className={clsx(
        "xl:w-3/5 mt-4 xl:even:self-end xl:self-start self-center w-[90%] max-w-3xl rounded-lg text-zinc-500 hover:text-white hover:text-xl hover:bg-zinc-900 transition-all duration-700 "
      )}
    >
      <a href={html_url} target="_blank">
        <figure className=" flex flex-col items-center gap-5 pb-4 group rounded-lg border-b-[1px] border-sky-400 shadow-lg hover:shadow-sky-400 duration-400">
          <img
            className="h-48 object-contain sm:object-cover sm:h-72 w-4/5 sm:w-[85%] rounded-lg group-hover:scale-[110%] group-hover:border-[1px] border-sky-400 group-hover:mb-5 transition-all duration-700"
            src={`https://github.com/Gshiotaaa/${name}/blob/main/projectImage/imagemProjeto.PNG?raw=true`}
            alt=""
          />
          <figcaption className="text-center">
            <h3 className="text-2xl">{name}</h3>
            <p>Linguagem Primária: {language}</p>
            <p>
              Criado em{" "}
              {new Date(created_at).toLocaleString("pt-Br", {
                year: "numeric",
                day: "numeric",
                month: "numeric",
              })}
            </p>
          </figcaption>
        </figure>
      </a>
    </div>
  );
}

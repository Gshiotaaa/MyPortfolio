import { useEffect, useState } from "react";

interface GitRepos {
  name: string;
  html_url: string;
  language: string;
  created_at: Date;
}

export function Projects() {
  const [repos, setRepos] = useState<GitRepos[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/gshiotaaa/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      });
  }, []);

  return (
    <div className="w-full mt-40 flex flex-col justify-center items-center text-white gap-14 border-b-[1px] border-zinc-900">
      <h1 className="text-6xl">Projetos</h1>
      <div className="w-4/5 mb-40 xl:w-full flex flex-col p-3 gap-5 ">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="w-3/5 mt-2 even:self-end self-start xl:self-center xl:even:self-center xl:w-[90%] xl:max-w-3xl rounded-lg text-zinc-500 hover:text-white hover:text-xl hover:bg-zinc-900 transition-all duration-700"
          >
            <a href={repo.html_url} target="_blank">
              <div className="flex flex-col items-center gap-5 pb-4 group rounded-lg border-b-[1px] border-sky-400 ">
                <img
                  className="h-72 w-[85%] rounded-lg group-hover:scale-[110%] group-hover:border-[1px] border-sky-400 group-hover:mb-8 transition-all duration-700"
                  src={`https://github.com/Gshiotaaa/${repo.name}/blob/main/projectImage/imagemProjeto.PNG?raw=true`}
                />
                <section className="text-center">
                  <h3 className="text-2xl">{repo.name}</h3>
                  <p>Linguagem Primária: {repo.language}</p>
                  <p>
                    Criado em{" "}
                    {new Date(repo.created_at).toLocaleString("pt-Br", {
                      year: "numeric",
                      day: "numeric",
                      month: "numeric",
                    })}
                  </p>
                </section>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

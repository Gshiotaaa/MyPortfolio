import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { ProjectsDescription } from "../components/ProjectsDescription";
import { ViewPortContext } from "../context/ViewPortContext";
import { api } from "../lib/axios";

interface GitRepos {
  name: string;
  html_url: string;
  language: string;
  created_at: Date;
}

export function Projects() {
  const [repos, setRepos] = useState<GitRepos[]>([]);
  const { setVisibleSection } = useContext(ViewPortContext);
  const projects = useRef(null);

  useEffect(() => {
    api.get("/repos").then((response) => setRepos(response.data));
  }, []);

  function compare(a: GitRepos, b: GitRepos) {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  }

  return (
    <motion.div
      ref={projects}
      id="Projects"
      className="w-full py-32 flex flex-col items-center justify-center text-white gap-14 border-b-[1px] border-zinc-900 "
      onViewportEnter={() =>
        setVisibleSection((prevState) => ({
          ...prevState,
          projects: true,
        }))
      }
      onViewportLeave={() =>
        setVisibleSection((prevState) => ({
          ...prevState,
          projects: false,
        }))
      }
    >
      <h1 className="text-6xl text-center">Projetos</h1>
      <div className="xl:w-11/12 w-full flex flex-col p-3 gap-5 ">
        {repos
          .slice(0, 5)
          .sort(compare)
          .map((repo) => (
            <ProjectsDescription
              key={repo.name}
              name={repo.name}
              language={repo.language}
              created_at={repo.created_at}
              html_url={repo.html_url}
            />
          ))}
      </div>
      <a
        href="https://api.github.com/users/gshiotaaa/repos"
        target="_blank"
        className="text-white text-xl opacity-30 hover:opacity-100 text-center snap-always snap-center"
      >
        Todas informações desta sessão estão sendo consumidas através da API do
        GitHub
      </a>
    </motion.div>
  );
}

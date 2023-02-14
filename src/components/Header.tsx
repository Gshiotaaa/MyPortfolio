import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { ViewPortContext } from "../context/ViewPortContext";

export function Header() {
  const [scroll, setScroll] = useState(0);

  const { visibleSection } = useContext(ViewPortContext);

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));
  }, []);

  return (
    <div
      className={clsx(
        "w-full h-28 flex lg:justify-around items-center bg-zinc-900 fixed  justify-center rounded-b-2xl z-10 border-b-2 border-b-sky-400 duration-500",
        { "h-20 bg-opacity-40 backdrop-blur-sm ": scroll > 0 }
      )}
    >
      <img className="h-14 w-14 bg-zinc-800 hidden lg:block " src="" alt="" />
      <div>
        <nav>
          <ul className="text-gray-400 flex gap-8 font-roboto font-normal text-2xl">
            <li
              className={clsx("hover:text-white transition-all duration-500", {
                "xl:text-white text-gray-400": visibleSection.home,
              })}
            >
              <a href="#Home"> Home</a>
            </li>
            <li
              className={clsx("hover:text-white transition-all duration-500", {
                "xl:text-white text-gray-400": visibleSection.skills,
              })}
            >
              <a href="#Skills">Skills</a>
            </li>
            <li
              className={clsx("hover:text-white transition-all duration-500", {
                "xl:text-white text-gray-400": visibleSection.projects,
              })}
            >
              <a href="#Projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

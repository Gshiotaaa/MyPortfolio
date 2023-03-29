import { AnimatePresence } from "framer-motion";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";
import { SkillsDescription } from "./SkillsDescription";

interface SkillsDescriptionForMobileProps {
  stacks: {
    name: string;
    img: string;
    description: string;
  }[];
}

export function SkillsDescriptionForMobile({
  stacks,
}: SkillsDescriptionForMobileProps) {
  const [page, setPage] = useState(0);

  function handleNextStack() {
    if (page == stacks.length - 1) {
      setPage(0);
      return;
    }
    setPage(page + 1);
  }

  function handlePrevStack() {
    if (page == 0) {
      setPage(stacks.length - 1);
      return;
    }
    setPage(page - 1);
  }

  return (
    <>
      <button onClick={handlePrevStack} className="absolute z-10 top-1/2">
        <CaretLeft />
      </button>
      <AnimatePresence>
        <SkillsDescription
          key={stacks[page].name}
          nameStack={stacks[page].name}
          img={stacks[page].img}
          title={stacks[page].name}
          description={stacks[page].description}
        />
      </AnimatePresence>
      <button
        onClick={handleNextStack}
        className="absolute right-0 z-10 top-1/2"
      >
        <CaretRight />
      </button>
    </>
  );
}

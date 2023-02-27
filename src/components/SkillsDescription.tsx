import { motion } from "framer-motion";

interface SkillsDescriptionProps {
  nameStack: string;
  title: string;
  img: any;
  description: string;
}

export function SkillsDescription({
  img,
  description,
  nameStack,
  title,
}: SkillsDescriptionProps) {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className=" w-60 h-[340px]  px-3 py-8 flex flex-col items-center gap-14 rounded-md overflow-hidden group border-b-[1px] border-sky-400 shadow-inner hover:shadow-sky-400 hover:bg-zinc-900 hover:gap-0 transition-all duration-1000">
        <h1 className="text-lg font-medium group-hover:opacity-0 text-gray-400 group-hover:text-white transition-opacity duration-700">
          {nameStack}
        </h1>
        <img
          className="h-32 w-32 group-hover:w-16 group-hover:h-16 group-hover:-translate-y-[+30px] transition-all duration-700 "
          src={img}
          title={title}
        />
        <p className="text-center opacity-0 group-hover:opacity-100 transition-all duration-700">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

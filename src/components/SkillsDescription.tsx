interface SkillsDescriptionProps {
  nameStack: string;
  img: any;
  description: string;
}

export function SkillsDescription({
  img,
  description,
  nameStack,
}: SkillsDescriptionProps) {
  return (
    <div className="flex gap-4">
      <div className=" flex flex-col items-center gap-14  hover:gap-0 transition-all duration-700 bg-zinc-900 w-60 h-[340px] rounded-md px-3 py-8 group overflow-hidden">
        <h1 className="text-lg font-medium group-hover:opacity-0 group-hover:text-white transition-opacity duration-700 text-gray-400">
          {nameStack}
        </h1>
        <img
          className="h-32 w-32 group-hover:-translate-y-[+30px] group-hover:w-16 group-hover:h-16 transition-all duration-700 "
          src={img}
        />
        <p className="group-hover:block group-hover:opacity-100 opacity-0 transition-all duration-700 text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

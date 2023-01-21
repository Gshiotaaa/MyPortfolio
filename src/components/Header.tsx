export function Header() {
  return (
    <div className="w-full h-28 flex justify-around items-center bg-zinc-900 fixed xl:relative lg:justify-center rounded-b-2xl z-10">
      <img
        className="h-14 w-14 bg-zinc-800 lg:hidden"
        src="https://cdn-icons-png.flaticon.com/512/2602/2602982.png"
        alt=""
      />
      <div>
        <nav>
          <ul className="text-gray-400 flex gap-8 font-roboto font-normal text-2xl">
            <li className="hover:text-white transition-all duration-500">
              <a href=""> Home</a>
            </li>
            <li className="hover:text-white transition-all duration-500">
              <a href="">Skills</a>
            </li>
            <li className="hover:text-white transition-all duration-500">
              <a href="">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

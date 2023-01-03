export function Header() {
  return (
    <div className="w-screen h-28 flex justify-around items-center bg-black fixed ">
      <img
        className="h-14 w-14 "
        src="https://static.vecteezy.com/system/resources/previews/002/986/080/original/letter-g-logo-design-template-free-vector.jpg"
        alt=""
      />
      <div>
        <nav>
          <ul className="text-gray-400 flex gap-8 font-roboto font-normal text-2xl">
            <li className="hover:text-white transition ease-in-out delay-100">
              <a href=""> Home</a>
            </li>
            <li className="hover:text-white transition ease-in-out delay-100">
              <a href="">Projects</a>
            </li>
            <li className="hover:text-white transition ease-in-out delay-100">
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

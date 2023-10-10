import { YouTubeLogo, YouTubeText, SearchButton } from "../assets";

const MainNav = () => {
  return (
    <nav className="container mx-auto w-full h-14 p-2 flex flex-row justify-around items-center">
      <div className="flex items-center justify-center gap-1 ">
        <YouTubeLogo />
        <YouTubeText />
        <p className="justify-self-end pt-1 hidden sm:block">lite</p>
      </div>
      <form className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-56 sm:w-96 md:w-[500px] h-8 bg-transparent outline outline-black32 rounded-sm indent-2 text-sm"
        />
        <button className="absolute bg-black32 inline-flex justify-center items-center right-0 h-8 w-12">
          <SearchButton />
        </button>
      </form>
    </nav>
  );
};

export default MainNav;

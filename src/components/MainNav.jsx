import { useNavigate } from "react-router-dom";
import { YouTubeLogo, YouTubeText, SearchButton } from "../assets";
import { Link } from "react-router-dom";

const MainNav = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const handleChange = (event) => {
    let { value } = event.target;
    setSearchTerm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <nav className="container mx-auto w-full h-14 p-2 flex flex-row justify-around items-center">
      <Link to={"/"}>
        <div className="flex items-center justify-center gap-1 ">
          <YouTubeLogo />
          <YouTubeText />
          <p className="justify-self-end pt-1 hidden sm:block">lite</p>
        </div>
      </Link>
      <form className="relative" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="w-56 sm:w-96 md:w-[500px] h-8 bg-transparent outline outline-black32 rounded-sm indent-2 text-sm"
          onChange={handleChange}
          value={searchTerm}
        />
        <button className="absolute bg-black32 inline-flex justify-center items-center right-0 h-8 w-12">
          <SearchButton />
        </button>
      </form>
    </nav>
  );
};

export default MainNav;

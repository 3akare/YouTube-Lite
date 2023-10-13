import { useParams } from "react-router-dom";
import Main from "./Main";

const SearchFeed = ({ feed, setFeed }) => {
  let { searchTerm } = useParams();
  return <Main selectedCatergory={searchTerm} feed={feed} setFeed={setFeed} />;
};

export default SearchFeed;

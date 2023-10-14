import { useState } from "react";
import { Navigation, Main, SearchFeed, Watch } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [selectedCatergory, setSelectedCatergory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [feed, setFeed] = useState([]);
  return (
    <BrowserRouter>
      <Navigation
        selectedCatergory={selectedCatergory}
        setSelectedCatergory={setSelectedCatergory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Main
              selectedCatergory={selectedCatergory}
              feed={feed}
              setFeed={setFeed}
            />
          }
        ></Route>
        <Route
          path="/search/:searchTerm"
          element={<SearchFeed feed={feed} setFeed={setFeed} />}
        ></Route>
        <Route path="/watch/:watchID" element={<Watch />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

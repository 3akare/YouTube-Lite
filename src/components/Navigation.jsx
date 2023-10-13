import { MainNav, SubNav } from "./index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navigation = ({
  setSelectedCatergory,
  selectedCatergory,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <nav className="sticky w-screen bg-black18 text-white divide-black38 divide-y-[0.5px] my-2 py-2">
      <MainNav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={
            <SubNav
              selectedCatergory={selectedCatergory}
              setSelectedCatergory={setSelectedCatergory}
            />
          }
        />
        <Route path="/search/:searchTerm" element={<></>} />
      </Routes>
      <div className="container mx-auto"></div>
    </nav>
  );
};

export default Navigation;

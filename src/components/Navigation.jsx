import { MainNav, SubNav } from "./index";

const Navigation = ({ setSelectedCatergory, selectedCatergory }) => {
  return (
    <nav className="sticky w-screen bg-black18 text-white divide-black38 divide-y-[0.5px] my-2 py-2">
      <MainNav />
      <SubNav
        selectedCatergory={selectedCatergory}
        setSelectedCatergory={setSelectedCatergory}
      />
      <div className="container mx-auto"></div>
    </nav>
  );
};

export default Navigation;

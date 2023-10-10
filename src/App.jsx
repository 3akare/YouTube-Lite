import { useState } from "react";
import { Navigation, Main } from "./components";

const App = () => {
  const [selectedCatergory, setSelectedCatergory] = useState("");
  return (
    <>
      <Navigation
        selectedCatergory={selectedCatergory}
        setSelectedCatergory={setSelectedCatergory}
      />
      <Main selectedCatergory={selectedCatergory} />
    </>
  );
};

export default App;

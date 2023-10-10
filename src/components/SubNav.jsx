import { categories } from "../assets/utils";

const SubNav = ({ setSelectedCatergory, selectedCatergory }) => {
  return (
    <div className="container mx-auto flex flex-row gap-4 overflow-auto  h-16 items-center lg:justify-center">
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            className={`${
              selectedCatergory === item?.title
                ? "bg-White text-black border-white"
                : "bg-black38 border border-black47 text-White"
            } p-[0.35rem] px-2 m-1 rounded-2xl  h-fit text-xs sm:text-sm min-w-fit`}
            onClick={() => {
              setSelectedCatergory(item?.title);
            }}
          >
            <p>{item?.title}</p>
          </button>
        );
      })}
    </div>
  );
};

export default SubNav;

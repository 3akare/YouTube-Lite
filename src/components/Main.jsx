import fetchData from "../fetchData";
import React, { useEffect, useState, Suspense } from "react";
const VideoCard = React.lazy(() => import("./VideoCard"));

const Main = ({ selectedCatergory }) => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetchData(
        `${selectedCatergory === "" ? "american" : ""}${selectedCatergory}`
      ).then((data) => {
        setFeed(data);
      }, 10000);
    });
  }, [selectedCatergory]);

  return (
    <div className="container mx-auto p-2 h-[95vh] -z-50 text-white">
      <p>{selectedCatergory} videos</p>
      <div className="grid gap-8 grid-cols-fluid">
        {feed.map((item, index) => {
          return (
            <Suspense key={index} fallback={<p>loading...</p>}>
              <VideoCard item={item} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default Main;

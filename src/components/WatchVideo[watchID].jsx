import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const Watch = () => {
  const { watchID } = useParams();
  console.log(watchID);
  return (
    <>
      <ReactPlayer url={`https://youtube.com/watch?v=${watchID}`} className="w-96 h-96"/>
    </>
  );
};

export default Watch;

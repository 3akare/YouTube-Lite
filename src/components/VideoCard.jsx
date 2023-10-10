import { timeAgo, truncateString } from "../../src/assets/utils";

const VideoCard = ({ item }) => {
  return (
    <div className="w-full h-52">
      <img
        className="w-full h-3/5 object-cover"
        src={item?.snippet?.thumbnails?.high?.url}
        loading="lazy"
      />
      <div className="p-2">
        <div className="flex justify-around items-start gap-2">
          <img
            className="w-8 h-8 min-h-[32px] rounded-full shrink-0 object-cover"
            src={item?.snippet?.thumbnails?.high?.url}
          />
          <div className="flex flex-col gap-1 font-semibold text-sm">
            <p className="h-14">{truncateString(item?.snippet?.title)}</p>
            <small className="text-xs font-normal">
              <span>{item?.snippet?.channelTitle}</span>
              <span className="w-[5px] h-[5px] bg-White inline-block rounded-full mx-2"></span>
              <span>{timeAgo(item?.snippet?.publishedAt)}</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

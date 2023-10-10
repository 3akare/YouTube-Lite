export const categories = [
  { title: "All", img: "" },
  { title: "Music", img: "" },
  { title: "History", img: "" },
  { title: "Cook Studio", img: "" },
  { title: "UX", img: "" },
  { title: "Case Study", img: "" },
  { title: "Tech", img: "" },
  { title: "User Interface Design", img: "" },
  { title: "Computer Science", img: "" },
  { title: "ReactJS", img: "" },
  { title: "Comedy", img: "" },
  { title: "Product Manangement", img: "" },
];

export function timeAgo(timestamp) {
  const currentDate = new Date();
  const pastDate = new Date(timestamp);

  const timeDifference = currentDate - pastDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else {
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }
}
export function truncateString(str) {
  if (str.length <= 55) {
    return str;
  } else {
    return str.slice(0, 55 - 2) + "..";
  }
}

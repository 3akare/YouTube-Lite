import axios from "axios";

export default async function fetchData(query) {
  try {
    const response = await axios.request({
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        q: query,
        part: "snippet",
        regionCode: "US",
        maxResults: "25",
        order: "date",
      },
      headers: {
        "X-RapidAPI-Key": "ccb91c6521msh9f6f6cb96a80056p11075cjsn1bf4364b0745",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    });
    return response.data?.items;
  } catch (error) {
  }
}

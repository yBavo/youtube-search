import axios from "axios";

const KEY = "AIzaSyA4PSGfSga5Sc_RZvscU17m0nL0Py7Co8k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

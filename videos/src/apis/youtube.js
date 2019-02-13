import axios from "axios";

const KEY = "AIzaSyC9fdR7LTYnNvmHkUmjKXeD0QeJa6ouLYg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

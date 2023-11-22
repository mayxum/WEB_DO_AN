import axios from "axios";

export default function (URL) {
  return axios.create({
    baseURL: URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

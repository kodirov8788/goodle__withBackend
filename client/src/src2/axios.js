import axios from "axios";

const instance = axios.create({
  baseURL: "https://goodle-uz.herokuapp.com/",
});
// const instance = axios.get({
//   baseURL: "./data.json",
// });

export default instance;

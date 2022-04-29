import axios from "axios";

const api = axios.create({
  baseURL: "http://34.234.225.253:8085",
});

export const saveFeedback = (body) => {
  return new Promise((resolve, reject) => {
    api
      .post("/pronotopantry/saveFeedback", body)
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

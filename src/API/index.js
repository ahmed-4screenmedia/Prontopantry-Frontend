import axios from "axios";

const api = axios.create({
  baseURL: "https://dashboard.pronto-pantry.com",
  // baseURL:"http://localhost:8085"
});

export const saveResidentFeedback = (body) => {
  return new Promise((resolve, reject) => {
    api
      .post("/pronotopantry/saveResidentFeedback", body)
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

export const saveManagerFeedback = (body) => {
  return new Promise((resolve, reject) => {
    api
      .post("/pronotopantry/saveManagerFeedback", body)
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


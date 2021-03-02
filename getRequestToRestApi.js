function getApiResult() {
  const axios = require("axios");
  const url = "https://jsonplaceholder.typicode.com/todos/1"; // ref: www.example.com/api/get/1

  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
getApiResult();

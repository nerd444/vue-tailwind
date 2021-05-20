import axios from "axios";
const baseUrl = "http://52.79.106.30:3010";

const config = {
  headers: {
    accesstoken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQzMDFkOGFlNmE2NTRlMDA3Njg0MWYiLCJpZCI6MTQsImVtYWlsIjoibmVyZEBuYXZlci5jb20iLCJpYXQiOjE2MDc2NjkwNjAsImV4cCI6MTYzMzU4OTA2MH0.GyyDBzip7iSWCLtw7T99phmhxGooczGH6xWqlJ4qt6Y",
  },
};

export function getProjectList() {
  return axios.get(baseUrl + `/project/list`);
}

export function getUserInfo() {
  return axios.get(baseUrl + `/accounts/profile/5f16b4b511c959824ce38be4`);
}

export function getProjectDetail() {
  return axios.get(
    baseUrl + `/project/detail/5fc39d9a3125d1a2766a2b94`,
    config
  );
}

export function getReviewList() {
  return axios.get(
    baseUrl + `/comment/5fc39d9a3125d1a2766a2b94?count=1`,
    config
  );
}

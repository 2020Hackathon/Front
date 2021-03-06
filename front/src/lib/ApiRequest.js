import axios from "axios";

const BASE_URL = "http://192.168.0.152/3000";

export const requestAPI = async (url, body, header, method) => {
  try {
    const res = await axios({
      url: BASE_URL + url,
      data: body,
      headers: header,
      method,
    });
    return res;
  } catch (err) {
    if (err.response) {
      if (err.response) {
        throw err.response.status;
      }
      alert("네트워크를 연결해주세요");
      throw null;
    }
  }
};

export const requestWithAccessToken = async (url, body, header, method) => {
  try {
    const accessToken = localStorage.getItem("access_token");
    const res = await requestAPI(
      url,
      body,
      { Authorization: accessToken, ...header },
      method
    );
    return res;
  }
  catch(errStatus){
    throw errStatus;
  }
};

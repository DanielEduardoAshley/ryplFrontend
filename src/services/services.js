const axios = require("axios");
const port = require('./port');
const serviceWorker = {};

serviceWorker.getMostViewedVids = () => {
  return axios.get(`http://localhost:${port}/video/home`);
};

serviceWorker.getVidThread = id => {
  return axios.get(`http://localhost:${port}/video/singlevid/${id}`);
};

serviceWorker.getVidsOfCategory = id => {
  return axios.get(`http://localhost:${port}/video/category/${id}`);
};

serviceWorker.postVideo = (
  userId,
  categoryId,
  title,
  responseTo,
  vidUrl,
  thumbnailUrl,
  annotation,
  description
) => {
  return axios.post(`http://localhost:${port}/video`, {
    userId,
    categoryId,
    title,
    responseTo,
    vidUrl,
    thumbnailUrl,
    annotation,
    description
  });
};

serviceWorker.postUser = (
  username,
  email,
  firebaseUid,
  firstName,
  lastName,
  imgUrl
) => {
  return axios.post(`http://localhost:${port}/user`, {
    username,
    email,
    firebaseUid,
    firstName,
    lastName,
    imgUrl
  });
};

serviceWorker.getUser = id => {
  return axios.get(`http://localhost:${port}/user/${id}`);
};

serviceWorker.deleteVideo = id => {
  return axios.delete(`http://localhost:${port}/video`, {
    id
  });
};

serviceWorker.getAllCategories = () => {
  return axios.get(`http://localhost:${port}/video/categories`);
};

module.exports = serviceWorker;
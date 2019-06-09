const axios = require("axios");
const port = require("./port");
const serviceWorker = {};

serviceWorker.getMostViewedVids = () => {
  return axios.get(
    "https://rypl.herokuapp.com/video/home" ||
    `http://localhost:${port}/video/home`
  );
};

serviceWorker.getVidThread = id => {
  return axios.get(
    `https://rypl.herokuapp.com/video/singlevid/${id}` ||
    `http://localhost:${port}/video/singlevid/${id}`
  );
};

serviceWorker.getVidsOfCategory = id => {
  return axios.get(`https://rypl.herokuapp.com/video/category/${id}` || `http://localhost:${port}/video/category/${id}`);
};

serviceWorker.postVideo = (
  userId,
  categoryId,
  videoTitle,
  responseTo,
  videoUrl,
  thumbnailUrl,
  annotation,
  description
) => {
  return axios.post(`https://rypl.herokuapp.com/video` || `http://localhost:${port}/video`, {
    userId,
    categoryId,
    videoTitle,
    responseTo,
    videoUrl,
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
  return axios.post(`https://rypl.herokuapp.com/user` || `http://localhost:${port}/user`, {
    username,
    email,
    firebaseUid,
    firstName,
    lastName,
    imgUrl
  });
};

serviceWorker.getUser = id => {
  return axios.get(`https://rypl.herokuapp.com/user/${id}` || `http://localhost:${port}/user/${id}`);
};

serviceWorker.deleteVideo = id => {
  return axios.delete(`https://rypl.herokuapp.com/video` || `http://localhost:${port}/video`, {
    id
  });
};

serviceWorker.getAllCategories = () => {
  return axios.get(`https://rypl.herokuapp.com/video/categories` || `http://localhost:${port}/video/categories`);
};

module.exports = serviceWorker;
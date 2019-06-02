const axios = require('axios');
const serviceWorker = {};

serviceWorker.getMostViewedVids = () => {
    return axios.get('http://localhost:3000/video/home');
};

serviceWorker.getVidThread = (id) => {
    return axios.get(`http://localhost:3000/video/singlevid/${id}`);
};

serviceWorker.getVidsOfCategory = (id) => {
    return axios.get(`http://localhost:3000/video/category/${id}`);
};

serviceWorker.postVideo = () => {

};

serviceWorker.postVideoResponse = () => {

};

serviceWorker.postUser = () => {

};

serviceWorker.getUser = () => {

};

serviceWorker.deleteVideo = () => {

};


module.exports = serviceWorker;
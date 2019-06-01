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

serviceWorker.postVideo = (userId, categoryId, title, responseTo, vidUrl, thumbnailUrl, annotation, description) => {
    return axios.post('http://localhost:3000/video', {
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

serviceWorker.postUser = (username, email, firebaseUid, firstName, lastName, imgUrl) => {
    return axios.post('http://localhost:3000/user', {
        username,
        email,
        firebaseUid,
        firstName,
        lastName,
        imgUrl
    });
};

serviceWorker.getUser = (id) => {
    return axios.get(`http://localhost:3000/user/${id}`);
};

serviceWorker.deleteVideo = (id) => {
    return axios.delete('http://localhost:3000/video', {
        id
    });
};


module.exports = serviceWorker;
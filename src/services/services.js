const axios = require('axios');
const serviceWorker = {};

serviceWorker.getMostViewedVids = () => {
    return axios.get('http://localhost:3000/video/home')
};

module.exports = serviceWorker;
const { default: axios } = require('axios');

content_url = process.env.CONTENT_URL;

module.exports = async () => {
    try {
        const res = await axios.get(content_url + "projects");
        return res.data;
    } catch (error) {
        console.error(error);
    }
};
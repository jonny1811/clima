const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b03759864b1411df85adfff4bdf5425e`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
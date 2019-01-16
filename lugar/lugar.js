const axios = require('axios');

const getLugarLatLng = async(direccion) => {


    let urlEncoded = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlEncoded}&key=AIzaSyDXZseisUBuHaJGe-FGd_ioJdBBPD9Qefs`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ${direccion}`);
    }


    let location = resp.data.results[0];
    let coors = location.geometry.location;


    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}
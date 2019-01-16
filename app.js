
//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
    
        return `La temperatura en ${coors.direccion} es de: ${temp}°`;
    } catch (e) {
        return `Error al determinar el clima en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(men => console.log(men))
    .catch(e => console.log(e));
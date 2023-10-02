const axios = require('axios');

const url = 'https://api.punkapi.com/v2/beers';

const getBeers = async () => {
    return await axios.get(url).then((res) => {
        console.log('tyum,lmin', res);
        return res.data;
    }).catch((error) => {
        console.error('Error:', error)
    })
}

module.exports = {
    getBeers
}
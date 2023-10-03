import axios from 'axios'

const url = 'https://api.punkapi.com/v2/beers';

export const apiPunk = axios.create({
    baseURL: url,
})

// const getBeers = async () => {
//     return await axios.get(url).then((res) => {
//         console.log('tyum,lmin', res);
//         return res.data;
//     }).catch((error) => {
//         console.error('Error:', error)
//     })
// }
import axios from 'axios'

const url = 'https://api.punkapi.com/v2/beers';

export const apiPunk = axios.create({
    baseURL: url,
})

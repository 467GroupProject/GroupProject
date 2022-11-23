/**
 * Axios middle-ware allowing front-end and back-end to talk
 */

import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: `http://localhost:3000`
    });
}
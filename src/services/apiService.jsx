import axios from 'axios';
import { BASE_URL } from '../utils/constant';

export const getPeopleList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/people`);
        // console.log('response', response);
        return response.data;
    } catch (error) {
        return error;
    }
};

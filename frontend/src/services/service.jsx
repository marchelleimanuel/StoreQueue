import axios from 'axios';
import { BASE_URL, GENERATE_PDF, NOMOR_ANTRIAN } from '../urlPath';


export const getNomorAntrian = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: BASE_URL + NOMOR_ANTRIAN,
        });

        const { data } = response;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const ambilAntrian = async () => {
    try {
        const response = await axios({
            method: 'post',
            url: BASE_URL + NOMOR_ANTRIAN,
        });

        const { data } = response;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const generatePdf = (nomorAntrian) => {
    try {
        const params = new URLSearchParams({
            nomorAntrian: nomorAntrian
        })
        window.open(`${BASE_URL + GENERATE_PDF}?${params.toString()}`);
    } catch (error) {
        console.log(error);
    }
}
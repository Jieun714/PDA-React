import axios from "axios"

// const SERVER_URL = "http://localhost:3001"
const SERVER_URL =
        "https://github.com/Jieun714/PDA-React/blob/main/src/data/db.json";

/** 해외주식 이벤트 리스트 GET API 호출 */
export const getStockGlobalEvents = async () => {
    // const response = await axios.get(`${SERVER_URL}/globalStockEvents`);
    // return response.data;
    
    return axios
        .get(`%{SERVER_URL}`)
        .then((response) => response.data.globalStockEvents);
};


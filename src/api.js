
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/"


});

// api는 서버에서 데려오는 것이기 때문에 서버와 같은 주소를 사용해야 한다. 
export const workbookApi = {
    workbookTotalGet: () => api.get("bbswork/"),
    workbookDetail: () => api.get(`bbswork/${id}`)
};



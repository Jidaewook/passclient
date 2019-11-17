
import axios from "axios";

const api = axios.create({
    //서버로부터 가져오는 것이기 때문에, 아래 Api셋팅에서도 서버의 app.js의 routes주소를 가져와야 한다. 
    baseURL: "http://localhost:5000/"


});

// api는 서버에서 데려오는 것이기 때문에 서버와 같은 주소를 사용해야 한다. 
// export const workbookApi = {
//     workbookTotalGet: () => api.get("bbswork/"),
//     workbookDetail: () => api.get(`bbswork/${id}`)
// };

export const LecApi = {
    lecTotalGet: () => api.get("bbslec/")

};

//다른 Api도 같은 방식으로 작성

export const NoticeApi = {
    noticeTotalGet: () => api.get("notice/")
};



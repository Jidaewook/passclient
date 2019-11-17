import React, {Component} from 'react';
import StudyPresenter from './studyPresenter';

class Study extends Component {
    state = {
        isLoading: true,
        bbsStudy: null,
        error: null
    };

    componentDidMount(){

        //fetch로 해당 주소에 접속하고, 그 데이터를 get하게 된다.
        return fetch("http://localhost:5000/bbsstudy/")
        //그렇게 가져온 데이터 전부인 뭉치를 response라고 명명하는데, 그걸 json형태로 바꿔준다. 
            .then((response) => response.json())
        //json형태가 된 데이터 전부인 뭉치를 responseJson으로 명명하는데, 
            .then((responseJson) => {
                //그 중 임의의 값을 선택하는 map을 통해 선택되는 배열 중 하나의 객체를 studydata라 명명하고, 그 중 타이틀을 로그로 뿌리자.
                console.log(responseJson);
                // responseJson.map(studydata => {
                //     console.log(studydata.title);
                // });
            });
    };

    render() {
        const {isLoading, bbsStudy, error} = this.state;
        return(
            <StudyPresenter 
                studyData={bbsStudy}
                loading={isLoading}
                error={error}

            />  
        );
    };
};

export default Study;
import React, {Component} from 'react';
import NoticePresenter from './NoticePresenter';


class Notice extends Component {
    state = {
        isLoading: true,
        bbsNotice: null,
        error: null
    };

    componentDidMount() {
        return fetch("http://localhost:5000/notice/")
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            });
    }
     
    render(){
        const {isLoading, bbsNotice, error} = this.state;
        return(
            <NoticePresenter 
                noticeData={bbsNotice}
                loading={isLoading}
                error={error}
            />


        );
    };
};

export default Notice;

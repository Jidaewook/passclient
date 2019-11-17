import React, {Component} from 'react';
import NoticePresenter from './NoticePresenter';
import {NoticeApi} from "../../api";

class Notice extends Component {
    state = {
        isLoading: true,
        bbsNotice: null,
        error: null
    };

    async componentDidMount() {
        try {
            const {
                data: {results: bbsNotice}

            } = await NoticeApi.noticeTotalGet();
            this.setState({bbsNotice});
        } catch {
            this.setState({
                error: "Can't find Notice Info"
            });
        } finally {
            this.setState({isLoading: false});
        }


    }
     
    render(){
        const {isLoading, bbsNotice, error} = this.state;
        console.log(error, bbsNotice);
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

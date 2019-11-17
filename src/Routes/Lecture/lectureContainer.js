import React, {Component} from 'react';
import LecturePresenter from './lecturePresenter';
import {LecApi} from "../../api";

class Lecture extends Component {
    state = {
        isLoading: true,
        bbsLecture: null,
        error: null

    };

    async componentDidMount() {
        try {
            const {
                data: {results: bbsLecture}
            } = await LecApi.lecTotalGet();
            this.setState({bbsLecture});
                
        } catch {
            this.setState({
                error: "Can't find Lecture Data Information"
            });
 
        } finally { 
            this.setState({isLoading: false});
        }
    }
    
    render() {
        const {isLoading, bbsLecture, error} = this.state;
        console.log(error);
        return(
            <LecturePresenter 
                loading={isLoading}
                lecData={bbsLecture}
                error={error}

            />
        );
    };
};

export default Lecture;
import React, {Component} from 'react';
import LecturePresenter from './lecturePresenter';


class Lecture extends Component {
    state = {
        isLoading: true,
        bbsLecture: null,
        error: null

    };

    componentDidMount() {
        return fetch("http://localhost:5000/bbslec/")
            .then((response) => response.json())
            .then((responseJson) => {
                responseJson.map(lecdata => {
                    console.log(lecdata.title);
                })
            });
    }
    
    render() {
        const {isLoading, bbsLecture, error} = this.state;
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
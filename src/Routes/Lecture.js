import React, {Component} from 'react';

class Lecture extends Component {
    state = {
        isLoading: true,
        bbsLecture: []

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
        const {isLoading, bbsLecture} = this.state;
        return(
            <div>
                <b1>Lecture Complete</b1>
            </div>
        );
    };
};

export default Lecture;
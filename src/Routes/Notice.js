import React, {Component} from 'react';

class Notice extends Component {
    state = {
        isLoading: true,
        bbsNotice: []
    };

    componentDidMount() {
        return fetch("http://localhost:5000/notice/")
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            });
    }
     
    render(){
        const {isLoading, bbsNotice} = this.state;
        return(
            <div>
                <b1>Notice Complete</b1>
            </div>
        );
    };
};

export default Notice;

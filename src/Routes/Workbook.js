import React, {Component} from 'react';
import axios from 'axios';




class Workbook extends Component {

    state = {
        isLoading: true,
        bbsinfo: []
    };

    getbbswork = async () => {
        const {
            bbsinfo
        } = await axios.get(
            "http://localhost:5000/bbswork/"
        );
        this.setState({bbsinfo, isLoading: false});
    };

    componentDidMount() {
        return fetch("http://localhost:5000/bbswork/")
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            });

    };


    render(){
        const {isLoading, bbsinfo} = this.state;
        return(
            <div>
                <b1>return</b1>
            </div>


        );
    }
};


export default Workbook;

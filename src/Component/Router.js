import React from 'react';
import {
    HashRouter as Router, 
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import Notice from "../Routes/Notice";
import Workbook from "../Routes/Workbook";
import Lecture from "../Routes/Lecture";
import Study from "../Routes/Study";
import Consultant from "../Routes/Consultant";
import qna from "../Routes/Errorqna";

import Header from "./Header";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Notice} />
                <Route path="/bbswork" exact component={Workbook} />
                <Route path="/lecture" exact component={Lecture} />
                <Route path="/study" exact component={Study}/>
                <Route path="/consultant" exact component={Consultant}/>
                <Route path="/qna" exact component={qna}/>

                <Redirect from="*" to="/"/>
            </Switch>
        </>
    </Router>
    
);
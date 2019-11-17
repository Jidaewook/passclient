import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StudyPresenter = ({studyData, loading, error}) => 
    <h1>{studyData}</h1>;

StudyPresenter.propTypes = {
    studyData: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default StudyPresenter;
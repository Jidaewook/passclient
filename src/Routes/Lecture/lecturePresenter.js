import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const LecturePresenter = ({lecData, loading, error}) =>

    <h1>{lecData}</h1>;

LecturePresenter.propTypes = {
    lecData: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default LecturePresenter;
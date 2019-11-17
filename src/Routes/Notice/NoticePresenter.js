import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const NoticePresenter = ({noticeData, loading, error}) => 
    <h1>{noticeData}</h1>;

NoticePresenter.propTypes = {
    noticeData: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default NoticePresenter;

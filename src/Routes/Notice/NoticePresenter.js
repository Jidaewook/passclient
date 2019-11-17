import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Component/Loader";


const Container = styled.div`
    padding: 0px 10px;
`;

const NoticePresenter = ({noticeData, loading, error}) => 
    loading ? (
        <Loader />

    )   : (
        <Container>
            {noticeData && noticeData.length > 0 && (
                <div>
                    {noticeData.map(noticeDataDetail =>
                        <span key={noticeDataDetail._id}>{noticeDataDetail.title}</span>
                    )}
                </div>
            )}
        </Container>
    ) 




NoticePresenter.propTypes = {
    noticeData: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default NoticePresenter;

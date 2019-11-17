import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../Component/Loader";
import Poster from "../../Component/Poster";

const Container = styled.div`
    padding: 0px 10px;
`;

const LecturePresenter = ({lecData, loading, error}) =>

    loading ? (
        <Loader />
    ) : (
        <Container>
            {lecData && lecData.length > 0 && (
                <>
                {lecData.map(lecDataDetail =>
                    <Poster 
                        key={lecDataDetail._id}
                        id={lecDataDetail._id}
                        title={lecDataDetail.title}
                        image={lecDataDetail.files}
                        user={lecDataDetail.user}
                        date={lecDataDetail.date}
                        like={lecDataDetail.like}


                    />
                )}
                </>
            )}
        </Container>
    )

LecturePresenter.propTypes = {
    lecData: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default LecturePresenter;
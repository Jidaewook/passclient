import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    font-size: 12px;
`;

const ImageContainer = styled.div`
    margin-bottom: 7px;
    position: relative;
    
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const User = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const Date = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const Like = styled.span``;


const Poster = ({
    id,
    title,
    image,
    user,
    date,
    like 

}) => (
    <Container>
        <ImageContainer>
            <Image bgUrl={image}>
                <Title>
                    {title}
                </Title>
                <User>
                    {user}
                </User>
                <Date>
                    {date.slice(0, 10)}
                </Date>
            </Image>
            
        </ImageContainer>
    </Container>
);

Poster.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    user: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    like: PropTypes.array
};

export default Poster;
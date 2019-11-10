import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul`
    display: flex;
    &:hover {
        background-color: blue;
    }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (
    <Header>
        <List>
            <Item>
                <SLink to="/">공지사항</SLink>
            </Item>
            <Item>
                <SLink to="/workbook">학습지게시판</SLink>
            </Item>
            <Item>
                <SLink to="/lecture">강좌게시판</SLink>
            </Item>
            <Item>
                <SLink to="/study">스터디게시판</SLink>
            </Item>
            <Item>
                <SLink to="/consultant">상담게시판</SLink>
            </Item>
            <Item>
                <SLink to="/qna">오류문의게시판</SLink>
            </Item>

        </List>
    </Header>
);
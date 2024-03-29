import React from 'react';
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    background-color: rgba(20, 20, 20, 0.8);
    z-inex: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.7);


`;

const List = styled.ul`
    display: flex;
    
`;

const Item = styled.li`
    width: 100px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid
      ${props => (props.current ? "#3498db" : "transparent")};
    transition: border-bottom 0.5s ease-in-out;  
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({location: {pathname}}) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">공지사항</SLink>
            </Item>
            <Item current={pathname === "/bbswork"}>
                <SLink to="/bbswork">학습지게시판</SLink>
            </Item>
            <Item current={pathname === "/lecture"}>
                <SLink to="/lecture">강좌게시판</SLink>
            </Item>
            <Item current={pathname === "/study"}>
                <SLink to="/study">스터디게시판</SLink>
            </Item>
            <Item current={pathname === "/consultant"}>
                <SLink to="/consultant">상담게시판</SLink>
            </Item>
            <Item current={pathname === "/qna"}>
                <SLink to="/qna">오류문의게시판</SLink>
            </Item>

        </List>
    </Header>
));
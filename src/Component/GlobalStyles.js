import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    
    ${'' /* 아래의 a는 SLink안의 링크적인 속성을 가리킨다. */}
    a {
        text-decoration: none;
        color: inherit;
    }

    *{
        box-sizing: border-box;
    }

    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        background-color: rgba(20, 20, 20, 1);
        color: white;
        padding-top: 80px;
        margin-left: 50px;
    }
`;

export default globalStyles;
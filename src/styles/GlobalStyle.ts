import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    ${reset}
    *, *::before, *::after{
        box-sizing: border-box;
        line-height: 0;
    }
    html{
        font-size: 1vw;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    button {
      background-color: transparent;
      border: none;
    }
`;

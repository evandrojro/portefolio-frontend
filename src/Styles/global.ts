import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background: ${props => props.theme.colors.background};
    color:${props => props.theme.colors.textPrimary};
}


h1 {
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 47px;
    color:${props => props.theme.colors.textPrimary};
}

h2 {
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;
    color:${props => props.theme.colors.textPrimary};
}


h3 {
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;
    color:${props => props.theme.colors.textPrimary};
}

body, button, textarea, input {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
  }

html {
    scroll-behavior: smooth;
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5% // 14px
    }
  }


`
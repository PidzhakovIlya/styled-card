import { createGlobalStyle } from "styled-components";

export const GlobalStyles= createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inther', sans-serif;
    }
    body {
        background-color: #cfcece;
    }
`
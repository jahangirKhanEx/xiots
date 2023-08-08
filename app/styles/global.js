import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {

            h1 {
                font-family: 'Lato', sans-serif;
                font-size: 5.3rem;
            }

            h2 {
                font-family: 'Montserrat', sans-serif;
                font-size: 4rem;
            }

            h3 {
                font-family: 'Montserrat', sans-serif;
                font-size: 3.5rem;
            }

            h4 {
                font-family: 'Montserrat', sans-serif;
                font-size: 1.8rem;
            }

            h5 {
                font-family: 'Montserrat', sans-serif;
                font-size: 1.6rem;
            }

            p {
                font-family: 'Open Sans', sans-serif;
                font-size: 1.5rem;
            }

            a {
                text-decoration: none;
            }
        }
    }
`;

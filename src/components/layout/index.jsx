import React from 'react';
import { Header } from '..';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                    }

                    body {
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }

                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }

                    h1, h2 {
                        font-family: 'Roboto', sans-serif;
                    }

                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
               `}
            />
            <Helmet>
                <title>Gatsby Hotel</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto&display=swap" rel="stylesheet" />
            </Helmet>
            <Header />
            {children}
        </React.Fragment>
    );
}
 
export default Layout;

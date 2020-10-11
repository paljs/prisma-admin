import Head from 'next/head';
import { AppProps } from 'next/app';
import * as React from 'react';
import { NextPage } from 'next';
import Layout from 'Layouts/Admin';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'Api/client';

import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <Head>
        <title>Prisma Admin Dynamic Table</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-171177495-2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-171177495-2');
              `,
          }}
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
};

export default MyApp;

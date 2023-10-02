import App from 'next/app';
import { Layout } from "@/common/Layout/Layout";
import '../styles/css/styles.css'
import '../styles/css/plugins.css'
import '../styles/css/search.css'
import '../styles/quform/css/base.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {

  return <Layout>
    <Head>
      <link rel="shortcut icon" href="/img/logos/favicon.png" />
      <link rel="apple-touch-icon" href="/img/logos/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/img/logos/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/img/logos/apple-touch-icon-114x114.png" />
    </Head>
    <Component {...pageProps} />
  </Layout>
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;


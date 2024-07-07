import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
// import 'nprogress/nprogress.css'; // load standard styles for NProgress
import '../components/styles/nprogress.css'; // custom styles for NProgress

Router.events.on('routeChangeStart', () => NProgress.start()); // listen for route change start event
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

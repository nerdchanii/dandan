import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from '../layout/Footer/Footer';
import GNB from '../layout/GNB';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GNB />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

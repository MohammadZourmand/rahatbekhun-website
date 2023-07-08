// TODO => NEXT.JS
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

// todo => CSS STYLES
import '@/styles/globals.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'aos/dist/aos.css';
import AOS from "aos";

// todo => Redux & Modules
import { Provider } from 'react-redux';
import { store } from '@/store';
import Loadings from '@/components/global/components/loadings';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Provider store={store}>
      <Loadings />
      <Component {...pageProps} />
    </Provider>
  )
}

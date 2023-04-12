// TODO => NEXT.JS
import type { AppProps } from 'next/app'

// todo => CSS STYLES
import '@/styles/globals.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init();
  }, [])

  return <Component {...pageProps} />
}

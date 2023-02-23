// TODO => NEXT.JS
import type { AppProps } from 'next/app'

// todo => CSS STYLES
import '@/styles/globals.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

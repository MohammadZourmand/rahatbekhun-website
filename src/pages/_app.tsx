// TODO => NEXT.JS
import type { AppProps } from 'next/app'

// todo => CSS STYLES
import '@/styles/globals.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// todo => Redux & Modules
import { Provider } from 'react-redux';
import { store } from '@/store';
import Loadings from '@/components/global/elements/loadings';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Loadings loadingText='صبور باش دارم دنبال چیزی که خواستی میگردم !' />
      <Component {...pageProps} />
    </Provider>
  )
}

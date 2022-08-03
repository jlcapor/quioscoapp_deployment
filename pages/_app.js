import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import QuioscoContext, { QuioscoProvider } from '../context/QuioscoProvider';

function MyApp({ Component, pageProps }) {
  return (
    <QuioscoProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} />
    </QuioscoProvider>
  )
}

export default MyApp

/* spell-checker: disable */
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "./../app/store";
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "../components/head";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Head title="Rick and Morty" />
      <ToastContainer />
        <Component {...pageProps} />;
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;

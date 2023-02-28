import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import "@/styles/globals.css";
import { Layout } from "../components";
import dynamic from "next/dynamic";
import store from "../redux/store";
import { AppProvider } from "@/context/AppContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <Provider store={store}>
      {/* <AppProvider> */}
        <Toaster />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* </AppProvider> */}
     </Provider>
  );
}

export default MyApp;

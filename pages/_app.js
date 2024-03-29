import Navbar from "@/components/modules/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import Head from "next/head";
import Footer from "@/components/modules/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

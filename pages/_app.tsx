import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-CVE68XRBLW`} />

      <Script strategy="lazyOnload" id="gtag">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CVE68XRBLW',{
      page_path: window.location.pathname,
      });
     `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

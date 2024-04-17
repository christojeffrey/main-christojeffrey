import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const googleAnalyticsID = "G-CVE68XRBLW";
  const microsoftClarityID = "lxzd3pv1ke";
  return (
    <>
      {/* google analytics */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsID}`} />

      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsID}');
        `}
      </Script>

      {/* microsoft clarity */}
      <Script type="text/javascript" id="microsoft-clarity">
        {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${microsoftClarityID}");
          `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

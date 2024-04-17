import Script from "next/script";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* analytics */}
      <Script
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5QDW35T7');`,
        }}
      />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CVE68XRBLW"></Script>
      <Script
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `
    window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-CVE68XRBLW');`,
        }}
      ></Script>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QDW35T7" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
      </noscript>
      <div>{children}</div>
    </>
  );
}

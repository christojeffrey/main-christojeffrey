import Script from "next/script";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
      <div>{children}</div>
    </>
  );
}

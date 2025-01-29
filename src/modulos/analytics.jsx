import Script from "next/script"

const GoogleAnalytics = () => {

    return (
      <>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PNQGPQHNR7"></Script>
        <Script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-PNQGPQHNR7');
        </Script>
      </>  
    );
};
export default GoogleAnalytics;
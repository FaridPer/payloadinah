
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GoogleAnalytics from "../../modulos/analytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg-xml" href="/inah.svg" />
      <GoogleAnalytics/>
      </head>
      <body>
      <Navbar></Navbar>
          {children}   
      <Footer></Footer>        
      </body>
    </html>
  );
}

import Head from "next/head";

import Header from "./header/header";
import Footer from "./footer/footer";

const AppLayout = ({ children }) => {
  return (
    <div className="position-relative">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:site_name"
          content="Lindsey Carrillo Design Portfolio"
        />

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/LC72acd.png?format=1500w" />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="424" />

        <meta name="twitter:card" content="summary" />
        <meta name="description" content="" />
      </Head>
      <div id="site">
        <div id="canvas">
          <Header />
          <div id="pageWrapper" class="hfeed" role="main">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default AppLayout;

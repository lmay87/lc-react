import Head from "next/head";

import CustomPage from "../components/custom-page/custom-page";

export default function TreasureBond2020() {
  return (
    <section id="page">
      <Head>
        <title>
          TREASURE &amp; BOND 2020 &mdash; Lindsey Carrillo Design Portfolio
        </title>
        <meta
          property="og:title"
          content="TREASURE &amp; BOND 2020 &mdash; Lindsey Carrillo Design Portfolio"
        />
        <meta property="og:url" content="/treasure-bond-2020" />
        <meta
          itemprop="name"
          content="TREASURE &amp; BOND 2020 — Lindsey Carrillo Design Portfolio"
        />
        <meta itemprop="url" content="/treasure-bond-2020" />
        <meta
          name="twitter:title"
          content="TREASURE &amp; BOND 2020 — Lindsey Carrillo Design Portfolio"
        />
        <meta name="twitter:url" content="/treasure-bond-2020" />
      </Head>
      <CustomPage
        imageList={[
          {
            src: "/assets/images/treasure-bond-2020/treasure-bond-1.jpg",
          },
          {
            src: "/assets/images/treasure-bond-2020/treasure-bond-2.jpg",
          },
          {
            src: "/assets/images/treasure-bond-2020/treasure-bond-3.jpg",
          },
          {
            src: "/assets/images/treasure-bond-2020/treasure-bond-4.jpg",
          },
          {
            src: "/assets/images/treasure-bond-2020/treasure-bond-5.jpg",
          },
          {
            src: "/assets/images/treasure-bond-2020/treasure-bond-6.jpg",
          },
          {
            src: "/assets/images/treasure-bond-2020/treasure-bond-7.jpg",
          },
          {
            src: "/assets/images/treasure-bond-2020/treasure-bond-8.jpg",
          },
          {
            src: "/assets/images/treasure-bond-2020/treasure-bond-9.jpg",
          },
        ]}
      />
    </section>
  );
}

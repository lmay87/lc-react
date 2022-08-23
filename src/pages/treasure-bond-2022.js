import Head from 'next/head'

import CustomPage from '../components/custom-page/custom-page'

export default function TreasureBond2022() {
  return (
    <section id="page">
      <Head>
        <title>
          TREASURE &amp; BOND 2022 &mdash; Lindsey Carrillo Design Portfolio
        </title>
        <meta
          property="og:title"
          content="TREASURE &amp; BOND 2022 &mdash; Lindsey Carrillo Design Portfolio"
        />
        <meta property="og:url" content="/treasure-bond-2022" />
        <meta
          itemprop="name"
          content="TREASURE &amp; BOND 2022 — Lindsey Carrillo Design Portfolio"
        />
        <meta itemprop="url" content="/treasure-bond-2022" />
        <meta
          name="twitter:title"
          content="TREASURE &amp; BOND 2022 — Lindsey Carrillo Design Portfolio"
        />
        <meta name="twitter:url" content="/treasure-bond-2022" />
      </Head>
      <CustomPage
        imageList={[
          {
            src:
              '/assets/images/treasure-bond-2022/Treasure & Bond Anniversary 22-1.jpg',
          },
          {
            src:
              '/assets/images/treasure-bond-2022/Treasure & Bond Anniversary 22-2.jpg',
          },
          {
            src:
              '/assets/images/treasure-bond-2022/Treasure & Bond Anniversary 22-3.jpg',
          },
          {
            src:
              '/assets/images/treasure-bond-2022/Treasure & Bond spring 22-1.jpg',
          },
          {
            src:
              '/assets/images/treasure-bond-2022/Treasure & Bond spring 22-2.jpg',
          },
          {
            src:
              '/assets/images/treasure-bond-2022/Treasure & Bond spring 22-3.jpg',
          },
          {
            src:
              '/assets/images/treasure-bond-2022/Treasure & Bond Summer 22-1.jpg',
          },
          {
            src:
              '/assets/images/treasure-bond-2022/Treasure & Bond Summer 22-2.jpg',
          },
          {
            src:
              '/assets/images/treasure-bond-2022/Treasure & Bond Summer 22-3.jpg',
          },
        ]}
      />
    </section>
  )
}

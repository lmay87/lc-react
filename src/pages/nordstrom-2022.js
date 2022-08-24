import Head from 'next/head'

import CustomPage from '../components/custom-page/custom-page'

export default function Nordstrom2022() {
  return (
    <section id="page">
      <Head>
        <title>NORDSTROM 2022 &mdash; Lindsey Carrillo Design Portfolio</title>
        <meta
          property="og:title"
          content="NORDSTROM 2022 &mdash; Lindsey Carrillo Design Portfolio"
        />
        <meta property="og:url" content="/nordstrom-2022" />
        <meta
          itemProp="name"
          content="NORDSTROM 2022 — Lindsey Carrillo Design Portfolio"
        />
        <meta itemProp="url" content="/nordstrom-2022" />
        <meta
          name="twitter:title"
          content="NORDSTROM 2022 — Lindsey Carrillo Design Portfolio"
        />
        <meta name="twitter:url" content="/nordstrom-2022" />
      </Head>
      <CustomPage
        imageList={[
          {
            src: '/assets/images/nordstrom-2022/NORDSTOM ANNIVERSARY 22-2.jpg',
          },
          {
            src: '/assets/images/nordstrom-2022/NORDSTOM SPRING 22-2.jpg',
          },
          {
            src: '/assets/images/nordstrom-2022/NORDSTOM SUMMER 22- 2.jpg',
          },
          {
            src: '/assets/images/nordstrom-2022/NORDSTOM SUMMER 22-3.jpg',
          },
          {
            src: '/assets/images/nordstrom-2022/NORDSTROM ANNIVERSARY 22-1.jpg',
          },
          {
            src: '/assets/images/nordstrom-2022/NORDSTROM SPRING 22-1.jpg',
          },
          {
            src: '/assets/images/nordstrom-2022/NORDSTROM SPRING 22-3.jpg',
          },
          {
            src: '/assets/images/nordstrom-2022/NORDSTROM SUMMER 22-1.jpg',
          },
        ]}
      />
    </section>
  )
}

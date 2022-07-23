import Head from 'next/head'

import CustomPage from '../components/custom-page/custom-page'

export default function KidsSwin() {
  return (
    <section id="page">
      <Head>
        <title>KIDS SWIM &mdash; Lindsey Carrillo Design Portfolio</title>
        <meta
          property="og:title"
          content="KIDS SWIM &mdash; Lindsey Carrillo Design Portfolio"
        />
        <meta property="og:url" content="/kids-swim" />
        <meta
          itemProp="name"
          content="KIDS SWIM — Lindsey Carrillo Design Portfolio"
        />
        <meta itemProp="url" content="/kids-swim" />
        <meta
          name="twitter:title"
          content="KIDS SWIM — Lindsey Carrillo Design Portfolio"
        />
        <meta name="twitter:url" content="/kids-swim" />
      </Head>
      <CustomPage
        imageList={[
          {
            src: '/assets/images/kids-swim/bg+swim.jpg',
          },
          {
            src: '/assets/images/kids-swim/little+girl+swim.jpg',
          },
          {
            src: '/assets/images/kids-swim/off+price+swim.jpg',
          },
          {
            src: '/assets/images/kids-swim/baby+swim.jpg',
          },
        ]}
      />
    </section>
  )
}

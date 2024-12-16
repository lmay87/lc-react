import Head from 'next/head'
import CustomPage from '../components/custom-page/custom-page'

export default function Snack() {
  return (
    <section id="page">
      <Head>
        <title>
          SNACK &mdash; Lindsey Carrillo Design Portfolio
        </title>
        <meta
          property="og:title"
          content="SNACK &mdash; Lindsey Carrillo Design Portfolio"
        />
        <meta property="og:url" content="/snack" />
        <meta
          itemProp="name"
          content="SNACK — Lindsey Carrillo Design Portfolio"
        />
        <meta itemProp="url" content="/snack" />
        <meta
          name="twitter:title"
          content="SNACK — Lindsey Carrillo Design Portfolio"
        />
        <meta name="twitter:url" content="/snack" />
      </Head>
      <CustomPage
        imageList={[
          {
            src:
              '/assets/images/snack/snack-1.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-2.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-3.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-4.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-5.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-6.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-7.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-8.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-9.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-10.jpg',
          },
		    {
            src:
              '/assets/images/snack/snack-11.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-12.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-13.jpg',
          },
		    {
            src:
              '/assets/images/snack/snack-14.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-15.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-16.jpg',
          },
		    {
            src:
              '/assets/images/snack/snack-17.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-18.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-19.jpg',
          },
		    {
            src:
              '/assets/images/snack/snack-20.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-21.jpg',
          },
          {
            src:
              '/assets/images/snack/snack-22.jpg',
          },
		    {
            src:
              '/assets/images/snack/snack-23.jpg',
          },
        
        ]}
      />
    </section>
  )
}

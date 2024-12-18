import Head from 'next/head'
import CustomPage from '../components/custom-page/custom-page'

export default function HandBags() {
  return (
    <section id="page">
      <Head>
        <title>
          HANDBAGS &mdash; Lindsey Carrillo Design Portfolio
        </title>
        <meta
          property="og:title"
          content="HANDBAGS &mdash; Lindsey Carrillo Design Portfolio"
        />
        <meta property="og:url" content="/handbags" />
        <meta
          itemProp="name"
          content="HANDBAGS — Lindsey Carrillo Design Portfolio"
        />
        <meta itemProp="url" content="/handbags" />
        <meta
          name="twitter:title"
          content="HANDBAGS — Lindsey Carrillo Design Portfolio"
        />
        <meta name="twitter:url" content="/handbags" />
      </Head>
      <CustomPage
        imageList={[
          {
            src:
              '/assets/images/handbags/handbags-1.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-2.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-3.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-4.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-5.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-6.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-7.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-8.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-9.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-10.jpg',
          },
		    {
            src:
              '/assets/images/handbags/handbags-11.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-12.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-13.jpg',
          },
		    {
            src:
              '/assets/images/handbags/handbags-14.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-15.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-16.jpg',
          },
		    {
            src:
              '/assets/images/handbags/handbags-17.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-18.jpg',
          },
          {
            src:
              '/assets/images/handbags/handbags-19.jpg',
          },
		    {
            src:
              '/assets/images/handbags/handbags-20.jpg',
          },
        
        ]}
      />
    </section>
  )
}

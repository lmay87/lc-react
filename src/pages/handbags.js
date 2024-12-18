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
              '/assets/images/handbags/handbags-1.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-2.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-3.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-4.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-5.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-6.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-7.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-8.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-9.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-10.JPG',
          },
		    {
            src:
              '/assets/images/handbags/handbags-11.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-12.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-13.JPG',
          },
		    {
            src:
              '/assets/images/handbags/handbags-14.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-15.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-16.JPG',
          },
		    {
            src:
              '/assets/images/handbags/handbags-17.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-18.JPG',
          },
          {
            src:
              '/assets/images/handbags/handbags-19.JPG',
          },
		    {
            src:
              '/assets/images/handbags/handbags-20.JPG',
          },
        
        ]}
      />
    </section>
  )
}

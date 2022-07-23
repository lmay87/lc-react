import Head from 'next/head'

import CustomPage from '../components/custom-page/custom-page'

export default function DesignerProject() {
  return (
    <section id="page">
      <Head>
        <title>
          DESIGNER PROJECT &mdash; Lindsey Carrillo Design Portfolio
        </title>
        <meta
          property="og:title"
          content="DESIGNER PROJECT &mdash; Lindsey Carrillo Design Portfolio"
        />
        <meta property="og:url" content="/designer-project" />
        <meta
          itemProp="name"
          content="DESIGNER PROJECT — Lindsey Carrillo Design Portfolio"
        />
        <meta itemProp="url" content="/designer-project" />
        <meta
          name="twitter:title"
          content="DESIGNER PROJECT — Lindsey Carrillo Design Portfolio"
        />
        <meta name="twitter:url" content="/designer-project" />
      </Head>
      <CustomPage
        imageList={[
          {
            src: '/assets/images/designer-project/designer-project-1.jpg',
          },
          {
            src: '/assets/images/designer-project/designer-project-2.jpg',
          },
          {
            src: '/assets/images/designer-project/designer-project-3.jpg',
          },
          {
            src: '/assets/images/designer-project/designer-project-4.jpg',
          },
          {
            src: '/assets/images/designer-project/designer-project-5.jpg',
          },
          {
            src: '/assets/images/designer-project/designer-project-6.jpg',
          },
        ]}
      />
    </section>
  )
}

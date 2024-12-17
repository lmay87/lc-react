import Head from 'next/head';

export default function Home() {
  return (
    <section id="page">
      <Head>
        <title>Lindsey Carrillo Design Portfolio</title>
        <meta property="og:title" content="Lindsey Carrillo Design Portfolio" />
        <meta property="og:url" content="/" />
        <meta itemProp="name" content="Lindsey Carrillo Design Portfolio" />
        <meta itemProp="url" content="/" />
        <meta
          name="twitter:title"
          content="Lindsey Carrillo Design Portfolio"
        />
        <meta name="twitter:url" content="/" />
      </Head>

      <div className="sqs-layout sqs-grid-12 columns-12" id="page-content">
        {/* Hero Section */}
        <div className="hero-section">
          <figure style={{ maxWidth: '1148px', margin: '0 auto' }}>
            <img
              className="thumb-image"
              src="/assets/TB+DESIGNER+PROJECT+2.jpg"
              alt="Portfolio Highlight - Lindsey Carrillo"
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </figure>
        </div>

        {/* Spacer */}
        <div className="spacer" style={{ height: '10px' }}></div>

        {/* About Section */}
        <div className="about-section">
          <h1 className="about-header">About</h1>
          <div className="about-content">
            <p>
            Lindsey Carrillo began her career as a fashion designer and has since evolved into a creative professional excelling in graphic and apparel design. Below is a timeline of her journey.
            </p>

            {/* Timeline Section */}
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2003–2005</div>
                <div className="timeline-content">
                  <h3>Assistant Designer | 600 West</h3>
                  <p>Managed design projects and production processes, assisting senior designers with day-to-day tasks.</p>
                  <p>Gained hands-on experience in garment creation and production workflows.</p>
                  </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2005–2007</div>
                <div className="timeline-content">
                  <h3>Custom Design Specialist | Mira Couture</h3>
                  <p>Specialized in creating custom clothing and wedding gowns, working closely with clients to bring their visions to life.</p>
                  <p>Developed skills in pattern-making, garment fitting, and personalized design.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2010</div>
                <div className="timeline-content">
                  <h3>Graphic Designer | CGG Veritas</h3>
                  <p>Focused on branding, graphic design, and digital assets for a variety of corporate clients.</p>
                  <p>Contributed to enhancing visual identity and marketing materials for the companys services.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2011 - 2016</div>
                <div className="timeline-content">
                  <h3>Freelance Designer</h3>
                  <p>Worked on various custom design and graphic design projects, providing tailored solutions for clients across multiple industries.</p>
                  <p>Managed projects independently, building a diverse portfolio of work.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2017 - 2022</div>
                <div className="timeline-content">
                  <h3>Designer | Nordstrom</h3>
                  <p>Worked on multiple womens and kids labels, specializing in woven and knitwear design.</p>
                  <p>Collaborated with cross-functional teams, ensuring cohesive designs from concept to final product.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2022 - Present</div>
                <div className="timeline-content">
                  <h3>Senior Designer | Buffbunny Collection</h3>
                  <p>Taking on multiple roles, including designer, product developer, technical designer, and raw materials sourcing.</p>
                  <p>Lead design projects from ideation to execution, helping shape the brands aesthetic and product offerings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #page-content {
          padding: 20px;
        
        }

        .hero-section {
          text-align: center;
        }

        .about-header {
          font-size: 2.5rem;
          font-family: "Playfair Display", serif;
          color: #222;
          text-align: center;
          margin-bottom: 20px;
        }

        .about-section {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(15px);
          padding: 60px 20px;
          margin: 60px auto;
          max-width: 800px;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .about-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
          margin-bottom: 20px;
        }

        /* Timeline Styles */
        .timeline {
          position: relative;
          margin: 40px 0;
          padding: 0;
          list-style: none;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 20px;
          padding-left: 40px;
        }

        .timeline-item::before {
          content: "";
          position: absolute;
          top: 10px;
          left: 20px;
          width: 10px;
          height: 10px;
          background: #007acc;
          border-radius: 50%;
        }

        .timeline-item::after {
          content: "";
          position: absolute;
          top: 0;
          left: 24px;
          width: 2px;
          height: 100%;
          background: #e0e0e0;
        }

        .timeline-date {
          font-weight: bold;
          color: #666;
          margin-bottom: 5px;
        }

        .timeline-content h3 {
          margin: 0;
          font-size: 1.2rem;
          color: #222;
        }

        .timeline-content p {
          margin: 5px 0 0;
          font-size: 0.9rem;
          line-height: 1.5;
          color: #555;
        }

        .timeline-item:last-child::after {
          content: none;
        }
      `}</style>
    </section>
  );
}

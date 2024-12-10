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
With a career spanning multiple facets of the fashion and design industries, Lindsey Carrillo is a seasoned designer who brings a blend of creativity, technical skill, and versatility to every project. From her early days at 600 West, where she honed her craft in design, production, and sourcing for a global market, to her later roles in custom couture and graphic design, Lindsey has continually sought opportunities to expand her knowledge and expertise in both fashion and visual communication.
</p>
<p>
Her journey began as an Associate Assistant Designer at 600 West, a missy fit line, where she was immersed in all aspects of the production process—from sketching initial concepts to finalizing spec sheets and managing look book styling. Driven by a desire to deepen her understanding of design, Lindsey moved to Mira Couture, where she designed custom clothing and bridal gowns. Here, she was not only responsible for designing and sourcing fabrics, but also for pattern making, fitting, and building lasting relationships with clients.
</p>
<p>
A move to Texas marked an unexpected but transformative turn in Lindsey’s career. While there, she expanded her skill set by pursuing a degree in Graphic Design, and worked as a graphic designer for CGG Veritas, an oil and gas company. This experience sharpened her creative and conceptual thinking, and broadened her design knowledge across different industries.
</p>
<p>
Lindsey eventually relocated to Seattle, where she returned to her fashion roots. At Nordstrom, she gained further expertise working across multiple categories, including women's woven’s and kids’ apparel. Her role in designing for the "big girl" customer allowed her to work with a diverse range of fabrics and silhouettes, including sweaters, denim, cut-and-sew knits, and woven garments.
</p>
<p>
Today, Lindsey is a Senior Designer at Buffbunny Collection, where she combines her extensive fashion background with her passion for creating innovative, high-performance activewear. Her journey has been shaped by a constant drive to learn, grow, and push the boundaries of design, all while maintaining a deep respect for quality, craftsmanship, and the power of storytelling through fashion.
</p>


            {/* Timeline Section */}
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2008 - 2011</div>
                <div className="timeline-content">
                  <h3>Fashion Designer</h3>
                  <p>Worked at 600 West, managing designs and production processes.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2012 - 2014</div>
                <div className="timeline-content">
                  <h3>Custom Design Specialist</h3>
                  <p>Created custom clothing and wedding gowns at Mira Couture.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2015 - 2017</div>
                <div className="timeline-content">
                  <h3>Graphic Designer</h3>
                  <p>Joined CGG Veritas, focusing on branding and digital design.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2018 - Present</div>
                <div className="timeline-content">
                  <h3>Nordstrom Designer</h3>
                  <p>
                    Specializing in women’s and children’s apparel, expanding
                    expertise in sweaters, denim, and woven designs.
                  </p>
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

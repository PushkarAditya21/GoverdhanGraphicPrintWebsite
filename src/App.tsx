
import Header from "./components/Header";
import "./App.css";

const services = [
  {
    number: "01",
    title: "Business Printing",
    image: "/images/Business_Printing_image..png",
    description: "Professional printing for your everyday business needs.",
    items: ["Visiting Cards", "Letterheads", "Bill Books", "Envelopes"],
  },
  {
    number: "02",
    title: "Stamp Making",
    image: "/images/stamps_image.png",
    description: "High-quality custom stamps for offices, shops and businesses.",
    items: ["Rubber Stamps", "Custom Stamps", "Office Stamps", "Business Stamps"],
  },
  {
    number: "03",
    title: "Banners & Signage",
    image: "/images/Banners_Signage_image.png",
    description: "Eye-catching printed displays to promote your business.",
    items: ["Flex Banners", "Flex Boards", "Vinyl Boards", "Sun Boards", "Night Glow Signage", "GSTIN Boards"],
  },
  {
    number: "04",
    title: "Cards & Invitations",
    image: "/images/Cards_Invitations_image.png",
    description: "Make every occasion special with professionally printed cards.",
    items: ["Wedding Cards", "Invitation Cards"],
  },
  {
    number: "05",
    title: "Office & Promotional Printing",
    image: "/images/Office_Promotional_Products_image.png",
    description: "Useful printed products for offices, promotions and events.",
    items: ["Pamphlets", "Catalogues", "Diaries", "Calendars", "Stickers"],
  },
  {
    number: "06",
    title: "Name Plates",
    image: "/images/Name_Plates_image.png",
    description: "Durable, professional name plates for offices and businesses.",
    items: ["Brass Plates", "Steel Plates", "Table Plates", "Custom Name Plates"],
  },
];

function App() {
  return (
    <>
      <Header />

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-label">YOUR TRUSTED PRINTING PARTNER</p>
            <h1>
              Bring Your Ideas
              <br />
              <span>To Print.</span>
            </h1>
            <p className="hero-description">
              From business cards and custom stamps to banners and signage,
              we help your business make a lasting impression.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="primary-button">
                Explore Our Services
              </a>
              <a href="#contact" className="secondary-button">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-highlight">
            <img
              src="/images/goverdhan-logo.png"
              alt="Goverdhan Graphic Print logo"
            />
            <h2>Goverdhan Graphic Print</h2>
            <p>High Quality Stamp Maker</p>
            <span>Printing · Designing · Custom Stamps</span>
          </div>
        </section>

        <section className="intro-strip">
          <p>Business Printing</p>
          <p>Custom Stamp Making</p>
          <p>Banners & Signage</p>
          <p>Personalised Printing</p>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <p className="section-label">WHAT WE OFFER</p>
            <h2>Our Printing Services</h2>
            <p>Printing solutions for businesses, shops, offices and events.</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <img
                  className="service-image"
                  src={service.image}
                  alt={service.title}
                />
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a
                  className="service-link"
                  href="#contact"
                  aria-label={`Enquire about ${service.title}`}
                >
                  Enquire Now →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="section-label">ABOUT OUR BUSINESS</p>
          <h2>Print Quality You Can Count On</h2>
          <p>
            Goverdhan Graphic Print provides printing and custom stamp-making
            services for business and personal requirements.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-label">LET'S WORK TOGETHER</p>
          <h2>Need a Printing Quote?</h2>
          <p>Contact us to discuss your printing requirements.</p>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Call Us</h3>
              <p>Speak to us about your requirements.</p>
              <a href="tel:+919871694693">9871 694 693</a>
              <a href="tel:+919773503877">9773 503 877</a>
            </div>

            <div className="contact-card">
              <h3>Visit Our Shop</h3>
              <p>
                52A, Dabri Mode,
                <br />
                Near Dabri Flyover,
                <br />
                New Delhi – 110045
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=52A+Dabri+Mode+Near+Dabri+Flyover+New+Delhi+110045"
                target="_blank"
                rel="noreferrer"
              >
                Find Us on Maps →
              </a>
            </div>

            <div className="contact-card">
              <h3>Email Us</h3>
              <p>Send us your printing requirements.</p>
              <a href="mailto:gg_print1985@yahoo.com">
                gg_print1985@yahoo.com
              </a>
            </div>
          </div>

          <a
            className="whatsapp-button"
            href="https://wa.me/919871694693?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20printing%20services."
            target="_blank"
            rel="noreferrer"
          >
            Enquire on WhatsApp
          </a>
        </section>
      </main>
    </>
  );
}

export default App;

import "./App.css";

const whatsappNumber = "2349133457900";

const createWhatsappLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const whatsappLink = createWhatsappLink(
  "Hello Txmeg, I would like to make an order."
);

const products = [
  {
    name: "Male Scrubs",
    description: "Comfortable scrubs for male healthcare professionals and students.",
    price: "₦40,000",
    cta: "Order Male Scrubs",
    image: "/images/optimized/male-scrubs.webp",
    message: "Hello Txmeg, I would like to order Male Scrubs.",
  },
  {
    name: "Female Scrubs",
    description: "Stylish and comfortable scrubs designed for confident daily wear.",
    price: "₦40,000",
    size: "Sizes: 8–18",
    cta: "Order Female Scrubs",
    image: "/images/optimized/female-scrubs.webp",
    message: "Hello Txmeg, I would like to order Female Scrubs.",
  },
  {
    name: "Scrub Caps",
    description: "Clean, comfortable scrub caps for hospital, clinic, and school use.",
    price: "₦6,500",
    cta: "Order Scrub Caps",
    image: "/images/optimized/scrub-caps.webp",
    message: "Hello Txmeg, I would like to order Scrub Caps.",
  },
  {
    name: "Retractable Nurse Watch Badges",
    description: "Practical nurse watch badges for everyday clinical routines.",
    price: "₦6,000",
    cta: "Order Watch Badge",
    image: "/images/optimized/nurse-watch-badges.webp",
    message: "Hello Txmeg, I would like to order a Retractable Nurse Watch Badge.",
  },
  {
    name: "Lab Coats",
    description: "Professional lab coats for students and healthcare workers.",
    price: "Available on request",
    cta: "Ask About Lab Coats",
    image: "/images/optimized/lab-coats.webp",
    message: "Hello Txmeg, I would like to ask about Lab Coats.",
  },
];

const whyChoose = [
  "Comfortable for daily use",
  "Made for a professional look",
  "Flexible color options",
  "Easy WhatsApp ordering",
];

const customNotes = [
  "Custom colors available on request",
  "Name customization available for an extra ₦10,000",
  "Male and female scrubs available",
  "Lab coats available on request",
];

const orderSteps = [
  {
    title: "Choose your product",
    text: "Select scrubs, scrub caps, nurse watch badges, lab coats, or other medical essentials.",
  },
  {
    title: "Send a WhatsApp message",
    text: "Message Txmeg with the product, size, color, and customization details if needed.",
  },
  {
    title: "Confirm availability and payment",
    text: "Txmeg will confirm your order details, price, and delivery or pickup arrangement.",
  },
  {
    title: "Receive your order",
    text: "Your order will be prepared and delivered or arranged based on your location.",
  },
];

function App() {
  return (
    <main className="page">
      <header className="site-header">
        <a href="#hero" className="logo">
          <img src="/images/optimized/txmeg-logo.webp" alt="Txmeg logo" />
        </a>

        <nav className="nav-links">
          <a href="#products">Products</a>
          <a href="#custom">Custom Orders</a>
          <a href="#order">How To Order</a>
        </nav>

        <a href={whatsappLink} className="header-cta">
          Order on WhatsApp
        </a>
      </header>

      <section className="hero section" id="hero">
        <div className="hero-mobile-bg">
          <img
            src="/images/optimized/hero-medical-wear.webp"
            alt="Healthcare professional wearing Txmeg medical wear"
          />
        </div>

        <div className="hero-content">
          <p className="eyebrow">
            Medical Wear & Essentials for Professionals and Students
          </p>

          <h1>Comfortable medical wear made for everyday confidence.</h1>

          <p className="hero-text">
            Txmeg provides scrubs, lab coats, scrub caps, nurse watch badges,
            and medical essentials for healthcare professionals and students who
            want to look neat, feel comfortable, and stay ready for work or
            school.
          </p>

          <div className="hero-actions">
            <a href={whatsappLink} className="btn primary">
              Order on WhatsApp
            </a>

            <a href="#products" className="btn secondary">
              View Products
            </a>
          </div>

          <p className="trust-line">Available in Lagos and online.</p>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-image">
              <img
                src="/images/optimized/hero-medical-wear.webp"
                alt="Healthcare professional wearing Txmeg medical wear"
              />
            </div>

            <div className="floating-note">
              <strong>Simple WhatsApp ordering</strong>
              <span>No cart. No checkout. Just message and order.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="section-heading">
          <p className="eyebrow">Featured Products</p>
          <h2>Medical wear and essentials for your daily routine.</h2>
          <p>
            Explore Txmeg’s core products, available for healthcare workers,
            students, and medical teams.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name}>
              <div className={`product-image product-image-${index + 1}`}>
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <div className="product-meta">
                  <span>{product.price}</span>
                  {product.size && <small>{product.size}</small>}
                </div>

                <a href={createWhatsappLink(product.message)} className="product-link">
                  {product.cta}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mini-cta">
          <p>Found what you need?</p>
          <a href={whatsappLink}>Order on WhatsApp</a>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Why Choose Txmeg</p>
          <h2>Simple, neat, and reliable medical wear.</h2>
          <p>
            Txmeg helps healthcare professionals and students find clean,
            practical medical wear without stress.
          </p>
        </div>

        <div className="feature-list">
          {whyChoose.map((item) => (
            <div className="feature-item" key={item}>
              <span></span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section custom-section" id="custom">
        <div className="custom-layout">
          <div>
            <div className="section-heading">
              <p className="eyebrow">Custom Orders</p>
              <h2>Need something specific? Txmeg accepts custom requests.</h2>
              <p>
                Txmeg accepts custom requests for scrubs and selected medical
                essentials, including preferred colors and name customization.
              </p>
            </div>

            <div className="custom-card">
              {customNotes.map((note) => (
                <div className="custom-note" key={note}>
                  <span>✓</span>
                  <p>{note}</p>
                </div>
              ))}
            </div>

            <a href={whatsappLink} className="btn primary">
              Request a Custom Order
            </a>
          </div>

          <div className="custom-images">
            <div className="custom-image custom-image-large">
              <img
                src="/images/optimized/custom-orders-1.webp"
                alt="Txmeg customization sample"
              />
            </div>

            <div className="custom-image custom-image-small">
              <img
                src="/images/optimized/custom-orders-2.webp"
                alt="Txmeg custom medical wear sample"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div>
          <p className="eyebrow">About Txmeg</p>
          <h2>
            Medical wear and essentials for healthcare professionals and
            students.
          </h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/images/optimized/about-txmeg.webp" alt="Txmeg medical wear essentials" />
          </div>

          <div className="about-text">
            <p>
              Txmeg is a Lagos-based medical wear and essentials brand providing
              scrubs, lab coats, scrub caps, nurse watch badges, and related items
              for healthcare professionals and students.
            </p>

            <p>
              Built around simplicity, neatness, and accessibility, Txmeg makes it
              easier to get practical medical products online or within Lagos.
            </p>

            <div className="about-details">
              <span>Based in Lagos State</span>
              <span>Online shopping available</span>
              <span>Orders handled through WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section order-section" id="order">
        <div className="section-heading">
          <p className="eyebrow">How To Order</p>
          <h2>Ordering from Txmeg is simple.</h2>
        </div>

        <div className="steps-grid">
          {orderSteps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <a href={whatsappLink} className="btn primary center-btn">
          Start Your Order
        </a>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Wear Comfort, Deliver Care</p>

        <h2>
          Ready to order medical wear that looks neat and feels comfortable?
        </h2>

        <p>
          Send a WhatsApp message to Txmeg today to ask about available products,
          colors, sizes, and custom orders.
        </p>

        <a href={whatsappLink} className="btn primary">
          Order on WhatsApp
        </a>

        <span>Call or WhatsApp: 09133457900</span>
      </section>

      <footer className="site-footer">
        <div>
          <a href="#hero" className="footer-logo">
            <img src="/images/optimized/txmeg-logo.webp" alt="Txmeg logo" />
          </a>
        </div>

        <div className="footer-links">
          <a href="#products">Products</a>
          <a href="#custom">Custom Orders</a>
          <a href="#order">How To Order</a>
          <a href={whatsappLink}>WhatsApp</a>
        </div>

        <p className="footer-contact">Call or WhatsApp: 09133457900</p>
      </footer>
      <div className="site-credit">
        <p>
          © 2026 Txmeg. Website designed and built by <span>BelFoundry</span>.
        </p>
      </div>
    </main>
  );
}

export default App;
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const issues = [
  {
    number: "01",
    title: "Undelivered Save-the-Date Shoot",
    text: "Our quotation included a Save-the-Date Shoot, but the shoot was not delivered."
  },
  {
    number: "02",
    title: "Delayed Delivery",
    text: "Our photographs and videos were delivered significantly later than expected."
  },
  {
    number: "03",
    title: "Tilak Photography Quality",
    text: "We were dissatisfied with the quality of a number of photographs from the Tilak ceremony."
  },
  {
    number: "04",
    title: "Missing Drone Coverage",
    text: "The drone crashed during the wedding and there was no backup drone available, resulting in missing entry and varmala drone coverage."
  },
  {
    number: "05",
    title: "Customer-Service Experience",
    text: "After most of the payment had been made, we raised our concerns and found the subsequent communication unacceptable."
  }
];

function App() {
  return (
    <div className="site">
      <header className="hero">
        <nav className="nav">
          <div className="brand">Independent Wedding Review</div>
          <a href="#evidence">View Evidence</a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Independent customer experience</p>
          <h1>Patna Wedding Studio &amp; Films</h1>
          <p className="hero-title">Our Wedding Photography Experience</p>
          <p className="hero-copy">
            We are documenting our experience so that couples can make an
            informed decision before booking a wedding photography studio.
          </p>

          <div className="recommendation">
            <span className="recommendation-label">Our recommendation</span>
            <strong>We do not recommend this studio based on our experience.</strong>
          </div>
        </div>
      </header>

      <main>
        <section className="notice">
          <strong>Important:</strong> This is an independent customer website.
          It is not affiliated with, operated by, sponsored by, or endorsed by
          Patna Wedding Studio &amp; Films. The site documents our personal
          experience and supporting evidence.
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">What happened</p>
            <h2>Five major concerns</h2>
          </div>

          <div className="issue-grid">
            {issues.map((issue) => (
              <article className="issue-card" key={issue.number}>
                <span className="issue-number">{issue.number}</span>
                <h3>{issue.title}</h3>
                <p>{issue.text}</p>
                <a href="#evidence">See supporting evidence →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="timeline section">
          <div className="section-heading">
            <p className="eyebrow">Documented chronology</p>
            <h2>Our experience, step by step</h2>
          </div>

          <div className="timeline-list">
            <div className="timeline-item">
              <span>01</span>
              <div>
                <h3>Booking &amp; quotation</h3>
                <p>We booked the studio and received a quotation listing the agreed services.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>02</span>
              <div>
                <h3>Wedding events</h3>
                <p>Photography and videography coverage was carried out across the agreed events.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>03</span>
              <div>
                <h3>Missing / deficient deliverables</h3>
                <p>We identified missing services, missing drone coverage and quality concerns.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>04</span>
              <div>
                <h3>Follow-ups</h3>
                <p>We followed up regarding delivery and the concerns with the received material.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>05</span>
              <div>
                <h3>Our decision to document the experience</h3>
                <p>We decided to publish our experience and the supporting evidence for prospective customers.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="evidence" className="evidence section">
          <div className="section-heading">
            <p className="eyebrow">Evidence</p>
            <h2>Promise vs. delivery</h2>
            <p>
              Supporting documents and communications will be added here after
              sensitive personal information is appropriately redacted.
            </p>
          </div>

          <div className="evidence-grid">
            <div className="evidence-placeholder">
              <span>01</span>
              <h3>Original quotation</h3>
              <p>Upload the relevant quotation page showing the contracted services.</p>
            </div>
            <div className="evidence-placeholder">
              <span>02</span>
              <h3>Payment records</h3>
              <p>Upload relevant proof after redacting unnecessary financial identifiers.</p>
            </div>
            <div className="evidence-placeholder">
              <span>03</span>
              <h3>Communication</h3>
              <p>Add dated screenshots or exported messages supporting the account.</p>
            </div>
            <div className="evidence-placeholder">
              <span>04</span>
              <h3>Delivered work</h3>
              <p>Add representative examples of the received photographs or videos.</p>
            </div>
          </div>
        </section>

        <section className="response section">
          <div>
            <p className="eyebrow">Right of response</p>
            <h2>The studio can respond.</h2>
          </div>
          <p>
            We intend to give Patna Wedding Studio &amp; Films an opportunity
            to provide its response to the concerns documented on this website.
            Any substantive response received will be presented accurately and
            with appropriate context.
          </p>
        </section>
      </main>

      <footer>
        <p>Independent customer review · Patna Wedding Studio &amp; Films</p>
        <p className="footer-note">
          This website is intended to document a personal customer experience.
          All material should be presented accurately and with appropriate
          redaction of private information.
        </p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);

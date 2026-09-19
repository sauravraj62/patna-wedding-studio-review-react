import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import tilakPhoto from "../static/Image (6).jpg";
import morningSchedule from "../static/Image (7).jpg";
import arrivalReplies from "../static/image.png";
import deliveryDelay from "../static/delayy.jpg";
import serviceReplyNine from "../static/Image (9).jpg";
import serviceReplyTen from "../static/Image (10).jpg";
import serviceReplyEleven from "../static/Image (11).jpg";
import rawDeletionMessage from "../static/Audacity.jpg";
import "./styles.css";

const payment = { total: 120000, paid: 114500 };
const pendingAmount = payment.total - payment.paid;
const paidPercentage = (payment.paid / payment.total) * 100;
const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

const issues = [
  {
    number: "01",
    title: "Tilak Photography Quality",
    text: "We were dissatisfied with the quality of a number of photographs from the Tilak ceremony.",
    images: [
      {
        src: tilakPhoto,
        label: "Tilak photo screenshot",
        alt: "Gallery screenshot showing a seated participant at our Tilak ceremony.",
        caption: "Gallery screenshot of a sample Tilak photograph taken by the studio in daylight."
      }
    ]
  },
  {
    number: "02",
    title: "Late Arrival & Interim Photographer",
    text: "The team promised to reach the venue by 9 AM but arrived around 1 PM. They arranged for a local photographer to cover until they arrived. In our experience, the interim photographer was unprofessional, and we found this arrangement highly unprofessional.",
    images: [
      {
        src: morningSchedule,
        label: "9 AM schedule screenshot",
        alt: "WhatsApp schedule dated 3 December 2025 listing Tilak at 9:00 AM and Haldi at 11 AM at the hotel.",
        caption: "Our morning schedule shared on 3 December 2025, listing Tilak at 9 AM."
      },
      {
        src: arrivalReplies,
        label: "late-arrival replies screenshot",
        alt: "WhatsApp replies dated 4 December 2025: On the way hoon at 12:35 PM and Nikl gaya hoon at 12:36 PM.",
        caption: "Their replies on 4 December 2025 at 12:35 and 12:36 PM, saying they were on the way and had left."
      }
    ]
  },
  {
    number: "03",
    title: "Delayed Delivery",
    text: "Our wedding was on 4 December 2025, but delivery of our photographs and videos continued until the end of July 2026, more than 200 days after the wedding.",
    images: [
      {
        src: deliveryDelay,
        label: "delivery-delay screenshot",
        alt: "WhatsApp messages dated 20 and 22 July showing a PDF shared on 20 July and a wedding-video link shared on 22 July.",
        caption: "Messages from 20 and 22 July, including a wedding-video link shared on 22 July."
      }
    ]
  },
  {
    number: "04",
    title: "Customer-Service Experience",
    text: "When we raised these gaps, we found the studio's communication verbally abusive, and they did not acknowledge their mistakes.",
    images: [
      {
        src: serviceReplyNine,
        label: "customer-service reply at 5:35 PM",
        alt: "WhatsApp reply at 5:35 PM comparing us to thieves in response to our message about accountability, with our original message visible.",
        caption: "Reply at 5:35 PM to our message about accountability. The screenshot includes our message for context."
      },
      {
        src: serviceReplyTen,
        label: "customer-service reply at 5:31 PM",
        alt: "WhatsApp reply at 5:31 PM saying the sender knows how respectfully to speak to each person, in response to a concern about their manner of speaking.",
        caption: "Reply at 5:31 PM after a concern was raised about their manner of speaking."
      },
      {
        src: serviceReplyEleven,
        label: "customer-service reply at 5:25 PM",
        alt: "WhatsApp reply at 5:25 PM asking whether they should learn from us, in response to a request to value customers' time.",
        caption: "Reply at 5:25 PM to a request to value customers' time."
      }
    ]
  },
  {
    number: "05",
    title: "Raw-File Deletion Instruction",
    text: `Before delivery was complete, a message in the group instructed the team to delete all the project's raw data and close the group. We had already paid ${currencyFormatter.format(payment.paid)} of the ${currencyFormatter.format(payment.total)} total, with ${currencyFormatter.format(pendingAmount)} pending. The screenshot shows the instruction; it does not establish that the files were actually deleted.`,
    showPayment: true,
    images: [
      {
        src: rawDeletionMessage,
        label: "raw-file deletion instruction screenshot",
        alt: "WhatsApp group messages instructing a team member to delete all raw data for the project at 5:47 PM and close the group at 5:48 PM.",
        caption: "Instructions to delete the project's raw data at 5:47 PM and close the group at 5:48 PM."
      }
    ]
  },
  {
    number: "06",
    title: "Undelivered Save-the-Date Shoot",
    text: "Our quotation included a Save-the-Date Shoot, but the shoot was not delivered."
  },
  {
    number: "07",
    title: "Missing Drone Coverage",
    text: "The drone crashed during the wedding and there was no backup drone available, resulting in missing entry and varmala drone coverage."
  }
];

function PaymentSummary() {
  const summaryRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });

    observer.observe(summaryRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="payment-summary" ref={summaryRef}>
      <h4 id="payment-heading">Payment at the time of the dispute</h4>
      <dl className="payment-amounts">
        <div className="payment-total">
          <dt>Total agreed</dt>
          <dd>{currencyFormatter.format(payment.total)}</dd>
        </div>
        <div className="payment-paid">
          <dt>Paid</dt>
          <dd>{currencyFormatter.format(payment.paid)}</dd>
        </div>
        <div className="payment-pending">
          <dt>Pending</dt>
          <dd>{currencyFormatter.format(pendingAmount)}</dd>
        </div>
      </dl>
      <div
        className={`payment-progress${isVisible ? " is-visible" : ""}`}
        role="progressbar"
        aria-labelledby="payment-heading"
        aria-valuemin={0}
        aria-valuemax={payment.total}
        aria-valuenow={payment.paid}
        aria-valuetext={`${currencyFormatter.format(payment.paid)} paid of ${currencyFormatter.format(payment.total)}; ${currencyFormatter.format(pendingAmount)} pending`}
      >
        <span className="payment-progress-paid" style={{ width: `${paidPercentage}%` }} />
      </div>
      <div className="payment-percentages">
        <span>{paidPercentage.toFixed(1)}% paid</span>
        <span>{(100 - paidPercentage).toFixed(1)}% pending</span>
      </div>
      <ol className="payment-history" aria-label="Payment history">
        <li>
          <time dateTime="2026-01-06">6 January 2026</time>
          <strong>50% paid</strong>
        </li>
        <li>
          <time dateTime="2026-01-29">29 January 2026</time>
          <strong>Payment completed to 95%</strong>
        </li>
      </ol>
    </div>
  );
}

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

        <section id="evidence" className="evidence section">
          <div className="section-heading">
            <p className="eyebrow">What happened &amp; evidence</p>
            <h2>Seven major concerns</h2>
          </div>

          <div className="issue-grid">
            {issues.map((issue) => (
              <article className="issue-card" key={issue.number}>
                <span className="issue-number">{issue.number}</span>
                <h3>{issue.title}</h3>
                <p>{issue.text}</p>
                {issue.showPayment && <PaymentSummary />}
                {issue.images?.map((image) => (
                  <figure className="issue-photo" key={image.src}>
                    <a
                      href={image.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open full-size ${image.label} (opens in a new tab)`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))}
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

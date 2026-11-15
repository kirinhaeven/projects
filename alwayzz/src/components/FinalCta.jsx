import Reveal from './Reveal.jsx'

const AVATAR = 'https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png'

export default function FinalCta() {
  return (
    <section className="section cta-section" id="get-in-touch" aria-labelledby="cta-heading">
      <div className="section-inner">
        <Reveal className="cta-band">
          <p className="section-label">Next step</p>
          <h2 className="cta-title" id="cta-heading">
            Tell us the date. We will tell you if we can make it.
          </h2>
          <p className="cta-body">
            Fifteen minutes, no deck. We will look at the brief, ask the awkward questions, and give
            you a straight answer about whether we are the right studio for it.
          </p>

          <div className="hero-cta cta-actions">
            <a className="btn-primary" href="#plans">
              View Plans
            </a>

            <a className="btn-book" href="mailto:hello@alwayzz.studio">
              <img
                className="book-avatar"
                src={AVATAR}
                alt=""
                width="40"
                height="40"
                loading="lazy"
              />
              <span className="book-text">
                <span className="book-text-main">Chat for 15 minutes</span>
                <span className="book-text-sub">
                  <span className="book-dot" aria-hidden="true" />
                  Pick a slot
                </span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

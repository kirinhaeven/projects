import Reveal from './Reveal.jsx'

export default function Testimonial() {
  return (
    <section className="section" id="testimonial" aria-label="Client words">
      <div className="section-inner">
        <Reveal className="quote">
          <p className="quote-text">
            I had a launch date that could not move and a brand that did not exist yet. Alwayzz
            delivered both in nine days, and the files came with the documentation to keep using
            them without them.
          </p>
          <footer className="quote-by">
            <span className="quote-name">Dana Reyes</span>
            <span className="quote-role">Founder, Sablewood</span>
          </footer>
        </Reveal>
      </div>
    </section>
  )
}

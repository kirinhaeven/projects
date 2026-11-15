const LINE_COUNT = 20

const TICKER_ITEMS = [
  'Brand Identity',
  'App Development',
  'Visual Design',
  'Creative Video',
  'Iconography',
]

const AVATAR =
  'https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png'

function buildLines() {
  return Array.from({ length: LINE_COUNT }, (_, index) => ({
    key: `line-${index}`,
    width: 60 + index * 10,
    delay: `${index * 0.25}s`,
  }))
}

export default function Hero() {
  const lines = buildLines()

  return (
    <section className="hero" id="top">
      <div className="hero-lines" aria-hidden="true">
        {lines.map((line) => (
          <span
            key={`l-${line.key}`}
            className="hero-line hero-line-left"
            style={{ width: `${line.width}px`, animationDelay: line.delay }}
          />
        ))}
        {lines.map((line) => (
          <span
            key={`r-${line.key}`}
            className="hero-line hero-line-right"
            style={{ width: `${line.width}px`, animationDelay: line.delay }}
          />
        ))}
        {lines.map((line) => (
          <span
            key={`t-${line.key}`}
            className="hero-line hero-line-top"
            style={{ width: `${line.width}px`, animationDelay: line.delay }}
          />
        ))}
      </div>

      <div className="ticker" aria-label="Services">
        <div className="ticker-track">
          {[0, 1, 2, 3].map((copy) => (
            <div className="ticker-group" key={copy} aria-hidden={copy > 0}>
              {TICKER_ITEMS.map((item) => (
                <span className="ticker-item" key={item}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <h1 className="hero-title">
        Premium creative <span className="hero-title-serif">alwayzz</span>
        <sup className="hero-sup">®</sup> on demand.
      </h1>

      <p className="hero-subtitle">
        A flexible design partnership for founders, brands, and agencies who want top craft
        delivered on their timeline.
      </p>

      <div className="hero-cta">
        <a className="btn-primary" href="#plans">
          View Plans
        </a>

        <a className="btn-book" href="#get-in-touch">
          <img className="book-avatar" src={AVATAR} alt="" width="40" height="40" />
          <span className="book-text">
            <span className="book-text-main">Chat for 15 minutes</span>
            <span className="book-text-sub">
              <span className="book-dot" aria-hidden="true" />
              Pick a slot
            </span>
          </span>
        </a>
      </div>

      <div className="hero-blur" aria-hidden="true" />
    </section>
  )
}

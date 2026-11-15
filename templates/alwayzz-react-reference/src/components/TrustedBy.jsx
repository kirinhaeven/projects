const COMPANIES = [
  { name: 'Airbnb', fontFamily: "'Cedarville Cursive', cursive", fontWeight: 700 },
  { name: 'Shopify', fontFamily: 'system-ui, sans-serif', fontWeight: 800 },
  { name: 'Notion', fontFamily: 'Georgia, serif', fontWeight: 500 },
  { name: 'Linear', fontFamily: "'Inter', sans-serif", fontWeight: 600 },
  { name: 'Webflow', fontFamily: "'Inter', sans-serif", fontWeight: 700 },
  { name: 'Figma', fontFamily: 'system-ui, sans-serif', fontWeight: 600 },
  { name: 'Slack', fontFamily: 'Georgia, serif', fontWeight: 700 },
  { name: 'Stripe', fontFamily: 'system-ui, sans-serif', fontWeight: 800 },
  { name: 'Vercel', fontFamily: "'Inter', sans-serif", fontWeight: 600 },
  { name: 'Framer', fontFamily: "'Source Serif 4', serif", fontWeight: 600 },
]

export default function TrustedBy() {
  return (
    <section className="trusted" aria-label="Companies we have worked with">
      <p className="trusted-label">Partnered with top-tier companies globally</p>

      <div className="trusted-marquee">
        <div className="trusted-track">
          {[0, 1, 2, 3].map((copy) => (
            <div className="trusted-group" key={copy} aria-hidden={copy > 0}>
              {COMPANIES.map((company) => (
                <span
                  className="trusted-logo"
                  key={company.name}
                  style={{
                    fontFamily: company.fontFamily,
                    fontWeight: company.fontWeight,
                  }}
                >
                  {company.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Reveal from './Reveal.jsx'

const SERVICES = [
  {
    name: 'Brand Identity',
    body: 'Names, marks, and a type system that survive a public listing and a rebrand after it.',
    detail: 'Strategy, marks, typography, guidelines',
  },
  {
    name: 'App Development',
    body: 'Production front ends and design systems, shipped in the same week your site goes live.',
    detail: 'React, design systems, front end',
  },
  {
    name: 'Visual Design',
    body: 'Interface and campaign work drawn at the density your audience actually reads at.',
    detail: 'Product, campaign, editorial',
  },
  {
    name: 'Creative Video',
    body: 'Launch films and cutdowns edited to a schedule rather than to a render queue.',
    detail: 'Direction, edit, motion, grade',
  },
  {
    name: 'Iconography',
    body: 'One drawing style, delivered as a set your engineers can implement the same day.',
    detail: 'Sets, glyphs, production files',
  },
]

export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="section-inner">
        <Reveal className="section-head">
          <p className="section-label">What we make</p>
          <h2 className="section-title" id="services-heading">
            Five disciplines, one studio.
          </h2>
          <p className="section-lede">
            Most projects need two or three of these at once. A launch usually needs identity and a
            landing page in the same fortnight.
          </p>
        </Reveal>

        <ul className="services-grid">
          {SERVICES.map((service, index) => (
            <Reveal as="li" className="service-card" delay={index * 60} key={service.name}>
              <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-body">{service.body}</p>
              <p className="service-detail">{service.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

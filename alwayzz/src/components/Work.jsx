import Reveal from './Reveal.jsx'
import BrandSystemDemo from './work/BrandSystemDemo.jsx'

const PROJECTS = [
  {
    name: 'Sablewood',
    field: 'Brand identity',
    outcome: 'Marks, a type scale and a print system for a home goods label that stocked eleven stores in a year.',
  },
  {
    name: 'Halyard',
    field: 'App design and front end',
    outcome: 'A booking flow and a design system shipped alongside the engineering team, in React.',
  },
  {
    name: 'Fieldwork',
    field: 'Launch film',
    outcome: 'A ninety second launch film and eleven cutdowns, cut to a schedule rather than a render queue.',
  },
  {
    name: 'Orrery',
    field: 'Icon set',
    outcome: 'Two hundred and forty glyphs in one drawing style, delivered as SVG with a naming scheme.',
  },
]

export default function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-heading">
      <div className="section-inner">
        <Reveal className="section-head">
          <p className="section-label">Selected work</p>
          <h2 className="section-title" id="work-heading">
            Craft you can open in a browser.
          </h2>
        </Reveal>

        <div className="work-layout">
          <Reveal className="work-demo">
            <BrandSystemDemo />
            <p className="work-demo-caption">
              Sablewood brand system. The library, the rules, and the files your team implements.
            </p>
          </Reveal>

          <ul className="work-list">
            {PROJECTS.map((project, index) => (
              <Reveal as="li" className="work-item" delay={index * 70} key={project.name}>
                <div className="work-item-head">
                  <h3 className="work-item-name">{project.name}</h3>
                  <span className="work-item-field">{project.field}</span>
                </div>
                <p className="work-item-outcome">{project.outcome}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

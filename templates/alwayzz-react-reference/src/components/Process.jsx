import Reveal from './Reveal.jsx'

const STEPS = [
  {
    title: 'Brief',
    body: 'Forty five minutes on a call. You bring the deadline and the constraints. We bring the questions that would have come up in week three.',
  },
  {
    title: 'First pass',
    body: 'Direction arrives in days rather than rounds, so you can see the shape of the thing before anyone polishes it.',
  },
  {
    title: 'Handover',
    body: 'Every source file, font licence and written spec. Your team can keep building without us and without asking.',
  },
]

export default function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-heading">
      <div className="section-inner">
        <Reveal className="section-head">
          <p className="section-label">How it runs</p>
          <h2 className="section-title" id="process-heading">
            Three steps, no mystery.
          </h2>
        </Reveal>

        <ol className="process-grid">
          {STEPS.map((step, index) => (
            <Reveal as="li" className="process-step" delay={index * 90} key={step.title}>
              <span className="process-num">{index + 1}</span>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-body">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

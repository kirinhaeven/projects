import Reveal from './Reveal.jsx'

const PLANS = [
  {
    name: 'Sprint',
    summary: 'One deliverable, one week.',
    items: ['One identity, one landing page or one launch film', 'A short call to start and a written handover', 'Two rounds of changes'],
  },
  {
    name: 'Month',
    summary: 'A dedicated designer for four weeks.',
    items: ['Product and campaign work in one queue', 'A weekly slot for live work', 'Shared files and a written spec'],
  },
  {
    name: 'Partner',
    summary: 'A standing relationship, priority slots.',
    items: ['Reserved capacity each week', 'A rate held for the year', 'Your team works from our templates'],
  },
]

export default function Plans() {
  return (
    <section className="section" id="plans" aria-labelledby="plans-heading">
      <div className="section-inner">
        <Reveal className="section-head">
          <p className="section-label">Ways to work together</p>
          <h2 className="section-title" id="plans-heading">
            Three shapes of engagement.
          </h2>
          <p className="section-lede">
            Tell us the deadline and we will tell you which one fits. If none of them do, we will
            say so on the call.
          </p>
        </Reveal>

        <div className="plans-grid">
          {PLANS.map((plan, index) => (
            <Reveal className="plan" delay={index * 80} key={plan.name}>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-summary">{plan.summary}</p>
              <ul className="plan-list">
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

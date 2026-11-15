import Reveal from './Reveal.jsx'

const TEAM = [
  { name: 'Mara Villanueva', role: 'Founder, art direction', initials: 'MV' },
  { name: 'Teo Berhane', role: 'Design lead, brand systems', initials: 'TB' },
  { name: 'Rin Okafor', role: 'Motion and video', initials: 'RO' },
  { name: 'Jun Park', role: 'Product design, front end', initials: 'JP' },
]

export default function Team() {
  return (
    <section className="section" id="team" aria-labelledby="team-heading">
      <div className="section-inner">
        <Reveal className="section-head">
          <p className="section-label">The studio</p>
          <h2 className="section-title" id="team-heading">
            Four people you will actually talk to.
          </h2>
          <p className="section-lede">
            The person on your first call is the person doing the work. Nothing is passed to a
            junior after the paperwork.
          </p>
        </Reveal>

        <ul className="team-grid">
          {TEAM.map((member, index) => (
            <Reveal as="li" className="member" delay={index * 70} key={member.name}>
              <span className="member-avatar" aria-hidden="true">
                {member.initials}
              </span>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

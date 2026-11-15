import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal.jsx'

const QUESTIONS = [
  {
    q: 'How fast can you start?',
    a: 'Most sprints begin within five working days of the brief. If your date is closer than that, say so on the call and we will tell you honestly whether we can hit it.',
  },
  {
    q: 'Do you work alongside in house teams?',
    a: 'Most of our work happens next to an existing team. We work in your repository and your Figma file, and we hand over written documentation instead of a folder of exports.',
  },
  {
    q: 'What do you need from us?',
    a: 'One person who can approve, and any brand assets you already own. We will ask for more once the brief is clear.',
  },
  {
    q: 'Who owns the work?',
    a: 'You do, on final payment. Fonts, source files and the working files are transferred to you and stay yours.',
  },
  {
    q: 'Can you match an existing brand?',
    a: 'Yes. Send the guidelines and we will build inside them. We will also tell you where the system has holes that show up at scale.',
  },
  {
    q: 'Do you handle development?',
    a: 'We build front ends and design systems. Back end work stays with your engineers, and we write the spec so the handover is easy.',
  },
  {
    q: 'What if I only need one piece?',
    a: 'That is a sprint. A single identity, a single landing page or a single launch film is a normal way to work with us.',
  },
]

function FaqRow({ question, answer, id, isOpen, onToggle }) {
  return (
    <div className="faq-item" data-open={isOpen || undefined}>
      <h3 className="faq-heading">
        <button
          type="button"
          className="faq-question"
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={onToggle}
        >
          <span>{question}</span>
          <ChevronDown size={18} strokeWidth={1.75} className="faq-chevron" aria-hidden="true" />
        </button>
      </h3>
      <div className="faq-answer" id={id} role="region" aria-label={question}>
        <div className="faq-answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section" id="faqs" aria-labelledby="faq-heading">
      <div className="section-inner">
        <Reveal className="section-head">
          <p className="section-label">Questions</p>
          <h2 className="section-title" id="faq-heading">
            The things people ask first.
          </h2>
        </Reveal>

        <Reveal className="faq-list">
          {QUESTIONS.map((item, index) => {
            const id = `faq-panel-${index}`
            return (
              <FaqRow
                key={item.q}
                id={id}
                question={item.q}
                answer={item.a}
                isOpen={open === index}
                onToggle={() => setOpen(open === index ? null : index)}
              />
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

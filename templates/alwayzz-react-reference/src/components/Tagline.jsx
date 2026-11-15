import { useEffect, useRef } from 'react'

const LINE_ONE = 'Premium creative, on the day you said,'
const LINE_TWO = 'at the quality you meant.'

export default function Tagline() {
  const ref = useRef(null)

  /* Words light up one at a time as they cross a line across the middle of
     the viewport. A single rAF throttled scroll reader drives it, so a word
     that is already past the line when the page loads still lights up. */
  useEffect(() => {
    const root = ref.current
    if (!root) return undefined

    const words = Array.from(root.querySelectorAll('.tagline-word'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      words.forEach((word) => word.classList.add('is-lit'))
      return undefined
    }

    let frame = 0

    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.55
      words.forEach((word) => {
        if (word.classList.contains('is-lit')) return
        if (word.getBoundingClientRect().top <= line) word.classList.add('is-lit')
      })
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const line = (text) =>
    text.split(' ').map((word, index) => (
      <span className="tagline-word" key={`${word}-${index}`}>
        {word}
      </span>
    ))

  return (
    <section className="section tagline-section" id="approach" aria-label="What Alwayzz is">
      <div className="section-inner">
        <p className="tagline" ref={ref}>
          <span className="tagline-line">{line(LINE_ONE)}</span>
          <span className="tagline-line">
            {line(LINE_TWO)}
            <span className="tagline-dot" aria-hidden="true" />
          </span>
        </p>
      </div>
    </section>
  )
}

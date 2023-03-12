import { useRef, useEffect } from 'react'
import { EXPERIENCE_ROUTE, HERO_ROUTE } from '../../helpers/router-routes'
import { Section } from '../Section'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    sectionRef?.current?.classList.remove('animate-fadeFromLeft300')
    void sectionRef?.current?.offsetWidth
    sectionRef?.current?.classList.add('animate-fadeFromLeft300')
  }, [sectionRef])

  return (
    <Section
      id="about"
      ref={sectionRef}
      nextRoute={EXPERIENCE_ROUTE}
      prevRoute={HERO_ROUTE}
    >
      <div className="min-h-3/4 grid grid-col-1 gap-12 md:grid-cols-2 md:gap-12">
        {/* First Grid Item */}
        <div>
          <h1 className="text-sm text-lightSecondaryAccent md:text-base">
            About me
          </h1>
          <h2 className="mt-1 text-slate-200 text-3xl font-bold leading-relaxed tracking-wide md:text-5xl">
            Get to know me 🎸
          </h2>
          <section className="flex flex-col mt-6 text-slate-300 text-sm md:text-base md:mt-6">
            <span className="leading-8">
              My software journey started whilst I was completing my engineering
              qualification. Shortly after writing my first program, I was
              intruged and I decided to switch to the Computer Systems stream in
              order gain as much knowledge on the facinaiting world of computer
              systems.
            </span>
          </section>
        </div>
        {/* Second Grid Item */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-60 h-60 rounded-full bg-slate-300 bg-hero-pattern bg-bottom bg-contain bg-no-repeat bg-origin-border"></div>
        </div>
      </div>
    </Section>
  )
}

export default About

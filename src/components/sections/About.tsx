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
      <div className="grid grid-col-1 gap-12 md:grid-cols-2 md:gap-12">
        {/* First Grid Item */}
        <div>
          <h1 className="text-3xl text-white spacing capitalize md:text-5xl">
            About me
          </h1>
          <div className="flex flex-col mt-6 text-slate-300 text-sm md:text-base md:mt-14">
            <span className="leading-8">
              I'm a full-stack software engineer with over 3 years of experience
              in developing, maintaining and deploying software-solutions within
              the fintech space.
            </span>
          </div>
        </div>
        {/* Second Grid Item */}
        <div className="flex items-center justify-center w-full h-full"></div>
      </div>
    </Section>
  )
}

export default About

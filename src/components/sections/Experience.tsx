import { useRef, useEffect } from 'react'
import { ABOUT_ROUTE, CONTACT_ROUTE } from '../../helpers/router-routes'
import { Section } from '../Section'

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    sectionRef?.current?.classList.remove('animate-fadeFromLeft300')
    void sectionRef?.current?.offsetWidth
    sectionRef?.current?.classList.add('animate-fadeFromLeft300')
  }, [sectionRef])

  return (
    <Section
      id="experience"
      ref={sectionRef}
      nextRoute={CONTACT_ROUTE}
      prevRoute={ABOUT_ROUTE}
    >
      <h1 className="text-3xl text-white spacing capitalize md:text-5xl">
        Professional Experience
      </h1>
    </Section>
  )
}

export default Experience

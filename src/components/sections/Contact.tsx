import { useRef, useEffect } from 'react'
import { EXPERIENCE_ROUTE, HERO_ROUTE } from '../../helpers/router-routes'
import { Section } from '../Section'

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    sectionRef?.current?.classList.remove('animate-fadeFromLeft300')
    void sectionRef?.current?.offsetWidth
    sectionRef?.current?.classList.add('animate-fadeFromLeft300')
  }, [sectionRef])

  return (
    <Section
      id="contact"
      ref={sectionRef}
      nextRoute={HERO_ROUTE}
      prevRoute={EXPERIENCE_ROUTE}
      className="min-w-full pt-10 px-5 transition md:px-28 md:pt-24"
    >
      <h1 className="text-4xl text-white spacing capitalize md:text-5xl">
        Get in touch with me
      </h1>
    </Section>
  )
}

export default Contact

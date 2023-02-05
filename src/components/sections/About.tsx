import { useRef, useEffect } from "react";
import { EXPERIENCE_ROUTE, HERO_ROUTE } from "../../helpers/router-routes";
import { Section } from "../Section";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    sectionRef?.current?.classList.remove("animate-fadeFromLeft300");
    void sectionRef?.current?.offsetWidth;
    sectionRef?.current?.classList.add("animate-fadeFromLeft300");
  }, [sectionRef]);

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
            <h1 className="text-3xl text-white spacing capitalize md:text-5xl">About me</h1>
        </div>
        {/* Second Grid Item */}
      </div>
    </Section>
  );
};

export default About;

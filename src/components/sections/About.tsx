import { useRef, useEffect } from "react";
import { EXPERIENCE_ROUTE, HERO_ROUTE } from "../../helpers/router-routes";
import { rightArrow } from "../../helpers/svg-helper";
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
      <div className="min-h-full grid grid-col-1 gap-12 md:grid-cols-2 md:gap-12">
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
              My software journey began shortly after I wrote my first
              application at university. After which I decided to change to a
              different stream to learn all about the fascinating world of
              computer systems. 👨🏻‍💻 🌐
            </span>

            <span className="mt-4 leading-8">
              Since then, my passion for software development has grown
              exponentially, and I can honstely say that I love what I do for a
              living!
            </span>

            <span className="mt-4 leading-8 no-wrap">
              Outside of being a software engineer, I enjoy:
              <br />
              {rightArrow} Working out,
              <br />
              {rightArrow} Playing computer games,
              <br />
              {rightArrow} Jamming songs on my ukulele, and
              <br />
              {rightArrow} Spending time with friends and family.
            </span>
          </section>
        </div>
        {/* Second Grid Item */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-60 h-60 rounded-full bg-slate-300 bg-hero-pattern bg-bottom bg-contain bg-no-repeat bg-origin-border"></div>
        </div>
      </div>
    </Section>
  );
};

export default About;

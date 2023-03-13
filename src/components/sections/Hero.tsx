import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ABOUT_ROUTE, HERO_ROUTE } from "../../helpers/router-routes";
import { illustrationDeveloper, rightArrow } from "../../helpers/svg-helper";
import { Section } from "../Section";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    sectionRef?.current?.classList.remove("animate-fadeFromLeft300");
    void sectionRef?.current?.offsetWidth;
    sectionRef?.current?.classList.add("animate-fadeFromLeft300");
  }, [sectionRef]);

  return (
    <Section
      ref={sectionRef}
      id="hero"
      nextRoute={ABOUT_ROUTE}
      prevRoute={HERO_ROUTE}
    >
      <div className="min-h-full grid grid-col-1 gap-12 md:grid-cols-2 md:gap-12">
        {/* First Grid item */}
        <div>
          <h1 className="text-sm text-lightSecondaryAccent md:text-base">
            Hi, my name is
          </h1>
          <h2 className="max-w-fit mt-1 text-3xl text-slate-200 font-bold leading-relaxed tracking-wide whitespace-nowrap md:text-5xl">
            Dieter Lötz.
          </h2>
          <div className="flex flex-col mt-6 text-slate-300 text-sm md:text-base md:mt-14">
            <span className="leading-8">
              I'm a{" "}
              <span className="text-lightSecondaryAccent underline underline-offset-4">
                full-stack software engineer
              </span>{" "}
              with over 3 years of industry experience in developing,
              maintaining and deploying enterprise level software-solutions.
              <br />
              <br />I am passionate about creating{" "}
              <span className="text-lightSecondaryAccent underline underline-offset-4">
                awesome websites
              </span>{" "}
              and the intricate workflows in the{" "}
              <span className="text-lightSecondaryAccent underline underline-offset-4">
                backend
              </span>
              .
            </span>
          </div>
          <div className="hidden mt-20 place-self-center md:place-self-start md:block">
            <Link
              to={ABOUT_ROUTE}
              className="border border-lightSecondaryAccent rounded-md px-5 py-3 text-sm text-slate-300
                focus:transition-all focus:bg-lightSecondaryAccent focus:bg-opacity-80 focus:font-bold focus:text-veryDarkPrimaryAccent
                hover:transition-all hover:bg-lightSecondaryAccent hover:bg-opacity-80 hover:font-bold hover:text-veryDarkPrimaryAccent"
            >
              Learn more about me
              {rightArrow}
            </Link>
          </div>
        </div>
        {/* Second Grid item */}
        <div className="flex items-center justify-center w-full h-full">
          {/* <div className="w-60 h-60 rounded-full bg-slate-300 bg-hero-pattern bg-bottom bg-contain bg-no-repeat bg-origin-border"></div> */}
          {illustrationDeveloper}
        </div>
        <div className="place-self-center md:place-self-start md:hidden">
          <Link
            to={ABOUT_ROUTE}
            className="border border-lightSecondaryAccent rounded-md px-5 py-3 text-sm text-slate-300
                focus:transition-all focus:bg-lightSecondaryAccent focus:bg-opacity-80 focus:font-bold focus:text-veryDarkPrimaryAccent"
          >
            Learn more about me
            {rightArrow}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Hero;

const Hero = () => {
  const locationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4 stroke-slate-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );

  return (
    <section
      id="hero"
      className="grow w-full pt-10 px-5 animate-fadeFromLeft300 transition md:px-28 md:pt-24"
    >
      <div className="grid grid-col-1 gap-12 md:grid-cols-2 md:gap-12">
        {/* First Grid item */}
        <div>
          <h1 className="text-5xl text-white spacing md:text-6xl">
            I'm a{" "}
            <span className="bg-slate-800 max-w-fit leading-snug">
              Developer
            </span>
          </h1>
          <div className="flex gap-3 mt-2 text-slate-400 text-xs">
            {locationIcon}
            <span>Cape Town, South Africa | 23°C Sunny</span>
          </div>
          <div className="flex flex-col mt-6 text-white text-sm md:text-base">
            <span className="leading-10">Hello, My name is Dieter Lötz.</span>
            <span className="leading-8">
              I'm a full-stack software developer with a passion for quality
              software and solutions.
            </span>
          </div>
          <div className="hidden mt-20 place-self-center md:place-self-start md:block">
            <button
              type="button"
              className="border text-slate-300 rounded-xl px-5 py-3 text-sm bg-transparent 
                focus:font-bold focus:bg-slate-300 focus:text-darkBlue 
                hover:animate-fade150 hover:font-bold hover:bg-slate-300 hover:text-darkBlue md:text-base"
            >
              Learn more about me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="inline ml-3 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Second Grid item */}
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-60 h-60 rounded-full bg-slate-300 bg-hero-pattern bg-bottom bg-contain bg-no-repeat bg-origin-border"></div>
        </div>
        <div className="place-self-center md:place-self-start md:hidden">
          <button
            type="button"
            className="border text-slate-300 rounded-xl px-5 py-3 text-sm bg-transparent
                focus:font-bold focus:bg-slate-300 focus:text-darkBlue focus:animate-fade250
                md:text-base"
          >
            Learn more about me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline ml-3 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

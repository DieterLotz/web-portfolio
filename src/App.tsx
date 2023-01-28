import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
function App() {
  
  //const routes = ["hero","about","experience","contact"];

  const onScrollEventHandler = (e: React.WheelEvent<HTMLDivElement>) => {
    console.log(e.deltaY)
    if (e.deltaY > 0) {
      e.currentTarget.scrollLeft += 100;
      e.preventDefault();
    }
    else {
      e.currentTarget.scrollLeft -= 100;
      e.preventDefault();
    }
  }

  return (
    <main className="flex flex-col min-w-full min-h-full bg-veryDarkBlue">
      <Navbar />
      <div className="grow flex min-w-full" onWheel={(e) => onScrollEventHandler(e)}>
        <Hero />
        <About />
      </div>
      <Footer />
    </main>
  );
}

export default App;

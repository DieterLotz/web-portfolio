import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
function App() {
  return (
    <main className="flex flex-col min-w-full min-h-full bg-veryDarkBlue">
      <Navbar />
        <Hero />
      <Footer />
    </main>
  );
}

export default App;

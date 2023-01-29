import { Outlet } from 'react-router'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
function App() {
  return (
    <main className="flex flex-col min-w-full min-h-full bg-veryDarkBlue">
      <Navbar />
      <div className="flex grow overflow-x-scroll min-w-full">
       <Outlet/>
      </div>
      <Footer />
    </main>
  )
}

export default App

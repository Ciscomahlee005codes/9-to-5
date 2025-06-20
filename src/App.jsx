import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import Navbar from "./Components/Navbar/Navbar"
const Home = lazy(()=> import('./Pages/Home/Home'));
const Jobs = lazy(()=> import('./Pages/Jobs/Jobs'))
const NotFound = lazy(()=> import('./Pages/NotFound/NotFound'));
import Footer from './Components/Footer/Footer'
import Loader from "./Components/Loader/Loader";
const JobDetails = lazy(()=> import('./Pages/Jobs/JobDetails'))
const Contact = lazy(()=> import('./Pages/Contact/Contact'))
function App() {
 

  return (
    <div className="app-wrapper">
     <div className="app-content">
       <Suspense fallback={<Loader />}>
       <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/jobs/:id" element={<JobDetails />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
        <Footer />
       </Suspense>
     </div>
    </div>
  )
}

export default App

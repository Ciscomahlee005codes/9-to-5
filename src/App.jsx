import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Loader from "./Components/Loader/Loader"
import ThankYou from "./Components/ThankYou/ThankYou"
import DelayLoader from "./Components/Loader/DelayLoader"


const Home = DelayLoader(() => import('./Pages/Home/Home'), 3000);
const Jobs = DelayLoader(() => import('./Pages/Jobs/Jobs'), 3000);
const JobDetails = DelayLoader(() => import('./Pages/Jobs/JobDetails'), 3000);
const Contact = DelayLoader(() => import('./Pages/Contact/Contact'), 3000);
const NotFound = DelayLoader(() => import('./Pages/NotFound/NotFound'), 3000);

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
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
        <Footer />
       </Suspense>
     </div>
    </div>
  )
}

export default App

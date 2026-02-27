import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ScamTypesPage from './pages/ScamTypesPage'
import RecoveryPage from './pages/RecoveryPage'
import RedFlagsPage from './pages/RedFlagsPage'
import ReportPage from './pages/ReportPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scam-types" element={<ScamTypesPage />} />
          <Route path="/recovery" element={<RecoveryPage />} />
          <Route path="/red-flags" element={<RedFlagsPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

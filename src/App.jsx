import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import ListingDetails from './pages/ListingDetails';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
        <Route path="/bookings/:id" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

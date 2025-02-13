import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { MyTickets } from './pages/MyTickets';
import { AttendeeDetails } from './pages/AttendeeDetails';
import { TicketReady } from './pages/TicketReady';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/attendee-details" element={<AttendeeDetails />} />
        <Route path="/ticket-ready" element={<TicketReady />} />
      </Routes>
    </Router>
  );
}

export default App;
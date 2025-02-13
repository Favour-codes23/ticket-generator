import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface Ticket {
  id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  type: string;
  price: number;
  quantity: number;
  purchaseDate: string;
}

export function MyTickets() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTickets = localStorage.getItem('tickets');
    if (savedTickets) {
      setTickets(JSON.parse(savedTickets));
    }
  }, []);

  if (tickets.length === 0) {
    return (
      <div className="min-h-screen pt-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <h1 className="text-2xl font-semibold mb-6">My Tickets</h1>
            
            <div className="text-center py-12 text-gray-400">
              <p>You haven't booked any tickets yet.</p>
              <button 
                className="btn-primary mt-4"
                onClick={() => navigate('/')}
              >
                Book Your First Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-8">
          <h1 className="text-2xl font-semibold mb-6">My Tickets</h1>
          
          <div className="space-y-6">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="glass-card p-6">
                <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-6 rounded-lg mb-6">
                  <h2 className="text-3xl font-bold mb-2">HNG Summit 2025</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Lagos, Nigeria</span>
                    <span className="mx-2">||</span>
                    <span>March 15, 2025 | 1:00 PM</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={ticket.avatarUrl}
                    alt={`${ticket.fullName}'s avatar`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{ticket.fullName}</h3>
                    <p className="text-gray-400">{ticket.email}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <div>
                    <p className="text-primary">Ticket ID: #{ticket.id}</p>
                    <p className="text-gray-400">{ticket.type.toUpperCase()} ACCESS</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary">${ticket.price * ticket.quantity}</p>
                    <p className="text-gray-400">Quantity: {ticket.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
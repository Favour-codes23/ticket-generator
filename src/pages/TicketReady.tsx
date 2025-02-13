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
}

export function TicketReady() {
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
    if (tickets.length > 0) {
      setTicket(tickets[tickets.length - 1]);
    }
  }, []);

  if (!ticket) {
    return null;
  }

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Ticket Ready</h1>
            <span className="text-sm text-primary">Step 3/3</span>
          </div>
          
          <div className="glass-card p-8 mb-8">
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-6 rounded-lg mb-6">
              <h2 className="text-3xl font-bold mb-2">HNG Summit 2025</h2>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Lagos, Nigeria</span>
                <span className="mx-2">||</span>
                <span>March 15, 2025 | 1:00 PM</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
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

            <div className="text-center">
              <p className="text-primary mb-2">Ticket ID: #{ticket.id}</p>
              <p className="text-sm text-gray-400">{ticket.type.toUpperCase()} ACCESS</p>
              <p className="text-sm text-gray-400 mt-1">Quantity: {ticket.quantity}</p>
              <p className="text-lg text-primary mt-2">${ticket.price * ticket.quantity}</p>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button onClick={() => navigate('/my-tickets')} className="btn-primary">
              View My Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
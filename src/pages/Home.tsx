import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

interface TicketData {
  type: string;
  price: number;
  quantity: number;
}

export function Home() {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const navigate = useNavigate();
  
  const handleContinue = () => {
    if (selectedTicket) {
      const ticketData: TicketData = {
        type: selectedTicket,
        price: selectedTicket === 'vip' ? 100 : selectedTicket === 'vvip' ? 150 : 0,
        quantity: quantity
      };
      localStorage.setItem('ticketData', JSON.stringify(ticketData));
      navigate('/attendee-details');
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Ticket Selection</h1>
            <span className="text-sm text-primary">Step 1/3</span>
          </div>
          
          <div className="glass-card p-6 mb-8">
            <h2 className="text-3xl font-bold mb-2">HNG Summit 2025</h2>
            <p className="text-gray-400 mb-4">Join us for an unforgettable tech experience at the biggest tech conference in Africa.</p>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Lagos, Nigeria</span>
              <span className="mx-2">||</span>
              <span>March 15, 2025 | 1:00 PM</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg mb-4">Select Ticket Type:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setSelectedTicket('free')}
                className={cn(
                  "glass-card p-4 text-left transition-colors hover:border-primary/50",
                  selectedTicket === 'free' && "border-primary"
                )}
                aria-label="Free ticket - Regular access"
              >
                <div className="text-xl font-semibold mb-1">Free</div>
                <div className="text-sm text-gray-400">REGULAR ACCESS</div>
                <div className="text-xs text-primary mt-2">50/50</div>
              </button>
              
              <button
                onClick={() => setSelectedTicket('vip')}
                className={cn(
                  "glass-card p-4 text-left transition-colors hover:border-primary/50",
                  selectedTicket === 'vip' && "border-primary"
                )}
                aria-label="VIP ticket - $100"
              >
                <div className="text-xl font-semibold mb-1">$100</div>
                <div className="text-sm text-gray-400">VIP ACCESS</div>
                <div className="text-xs text-primary mt-2">20/25</div>
              </button>
              
              <button
                onClick={() => setSelectedTicket('vvip')}
                className={cn(
                  "glass-card p-4 text-left transition-colors hover:border-primary/50",
                  selectedTicket === 'vvip' && "border-primary"
                )}
                aria-label="VVIP ticket - $150"
              >
                <div className="text-xl font-semibold mb-1">$150</div>
                <div className="text-sm text-gray-400">VVIP ACCESS</div>
                <div className="text-xs text-primary mt-2">20/25</div>
              </button>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg mb-4">Number of Tickets</h3>
            <select 
              className="glass-card w-full p-4 bg-transparent"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              aria-label="Select number of tickets"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          
          <div className="flex justify-end gap-4">
            <button 
              className="btn-secondary"
              onClick={() => navigate('/my-tickets')}
            >
              Cancel
            </button>
            <button 
              className="btn-primary"
              onClick={handleContinue}
              disabled={!selectedTicket}
              aria-label="Continue to attendee details"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
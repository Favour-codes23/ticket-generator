import { Link, useLocation } from 'react-router-dom';
import { Ticket } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-primary">
          <Ticket className="w-6 h-6" />
          <span className="font-semibold">FaeTix</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className={cn(
              "hover:text-primary transition-colors",
              location.pathname === "/" && "text-primary"
            )}
          >
            Events
          </Link>
          <Link 
            to="/my-tickets" 
            className={cn(
              "hover:text-primary transition-colors",
              location.pathname === "/my-tickets" && "text-primary"
            )}
          >
            My Tickets
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "hover:text-primary transition-colors",
              location.pathname === "/about" && "text-primary"
            )}
          >
            About Project
          </Link>
          <Link to="/my-tickets" className="btn-primary">
            MY TICKETS →
          </Link>
        </div>
      </div>
    </nav>
  );
}
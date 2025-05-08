import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-truf-navy text-white py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/42b39e49-5acc-489e-a23c-649320085192.png" 
              alt="TURF50 Delta Pride" 
              className="h-12 md:h-14"
            />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-truf-cream transition-colors">Home</Link>
          <div className="relative group">
            <button className="hover:text-truf-cream transition-colors focus:outline-none">Sports ▾</button>
            <div className="absolute left-0 mt-2 w-40 bg-white text-truf-navy rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
              <Link to="/sports/cricket" className="block px-4 py-2 hover:bg-truf-cream">Cricket</Link>
              <Link to="/sports/football" className="block px-4 py-2 hover:bg-truf-cream">Football</Link>
              <Link to="/sports/pickleball" className="block px-4 py-2 hover:bg-truf-cream">Pickleball</Link>
              <Link to="/sports/volleyball" className="block px-4 py-2 hover:bg-truf-cream">Volleyball</Link>
            </div>
          </div>
          <Link to="/culture" className="hover:text-truf-cream transition-colors">Our Culture</Link>
          <Link to="/about" className="hover:text-truf-cream transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-truf-cream transition-colors">Contact</Link>
          <Button className="bg-truf-cream text-truf-navy hover:bg-opacity-90">Book Now</Button>
        </div>
        
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-truf-navy py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-truf-cream transition-colors py-2">Home</Link>
            <div className="relative group">
              <button className="hover:text-truf-cream transition-colors py-2 w-full text-left">Sports ▾</button>
              <div className="absolute left-0 mt-2 w-40 bg-white text-truf-navy rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
                <Link to="/sports/cricket" className="block px-4 py-2 hover:bg-truf-cream">Cricket</Link>
                <Link to="/sports/football" className="block px-4 py-2 hover:bg-truf-cream">Football</Link>
                <Link to="/sports/pickleball" className="block px-4 py-2 hover:bg-truf-cream">Pickleball</Link>
                <Link to="/sports/volleyball" className="block px-4 py-2 hover:bg-truf-cream">Volleyball</Link>
              </div>
            </div>
            <Link to="/culture" className="hover:text-truf-cream transition-colors py-2">Our Culture</Link>
            <Link to="/about" className="hover:text-truf-cream transition-colors py-2">About Us</Link>
            <Link to="/contact" className="hover:text-truf-cream transition-colors py-2">Contact</Link>
            <Button className="bg-truf-cream text-truf-navy hover:bg-opacity-90 w-full">Book Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

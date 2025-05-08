
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-truf-navy text-white py-16 md:py-24">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Premier Cricket Facility in <span className="text-truf-cream">Mannargudi</span>
          </h1>
          <p className="text-lg mb-8 text-gray-300 max-w-lg">
            TURF50 provides top-quality indoor sports facilities for cricket, football, and more.
            Experience professional sports infrastructure in the heart of Mannargudi.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/booking">
              <Button className="bg-truf-cream text-truf-navy hover:bg-opacity-90 text-lg">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/sports">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-truf-navy text-lg">
                Explore More
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="bg-truf-blue rounded-lg w-full h-[400px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1589395937788-27deff9d5f7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Professional cricket facility" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-truf-navy bg-opacity-20"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-truf-cream text-truf-navy p-4 rounded-lg shadow-xl">
            <p className="font-bold text-xl">Premium Sports Experience</p>
            <p className="text-sm">Mannargudi's Pride</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-truf-cream">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1589395937788-27deff9d5f7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="TRUF50 team at work"
              className="rounded-lg shadow-lg object-cover h-[400px] w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-truf-navy p-6 rounded-lg text-white shadow-xl hidden md:block">
              <p className="font-bold text-2xl">100+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-truf-navy">About TRUF50 Delta Pride</h2>
          <p className="text-gray-700 mb-4">
            Founded over 15 years ago, TRUF50 began with a simple mission: to provide the Delta 
            region with premium quality turf solutions that combine durability, aesthetics, and 
            performance.
          </p>
          <p className="text-gray-700 mb-6">
            Today, we've grown into the region's most trusted turf provider, serving sports facilities, 
            homes, and businesses. Our team of experts brings decades of combined experience and a 
            passion for excellence to every project we undertake.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-bold text-xl text-truf-navy">Local Expertise</p>
              <p className="text-gray-600 text-sm">Deep knowledge of local conditions</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-bold text-xl text-truf-navy">Quality First</p>
              <p className="text-gray-600 text-sm">Premium materials and installation</p>
            </div>
          </div>
          
          <Button className="bg-truf-navy text-white hover:bg-opacity-90">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;

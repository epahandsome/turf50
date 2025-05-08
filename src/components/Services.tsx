
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bath, Video, Users, Calendar, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "Cricket Turf & Football Field",
    description: "Professional-grade indoor sports surfaces designed for optimal play and performance.",
    icon: Bath,
  },
  {
    title: "Coaching & Match Practice",
    description: "Expert coaching sessions and match practice facilities with professional equipment.",
    icon: Trophy,
  },
  {
    title: "Video Analysis",
    description: "Advanced video analysis tools to improve your technique and game strategy.",
    icon: Video,
  },
  {
    title: "Floodlights for Night Play",
    description: "Premium lighting system allowing for extended play hours into the evening.",
    icon: Calendar,
  },
  {
    title: "Community Events",
    description: "Host tournaments, team building events, and community sports gatherings.",
    icon: Users,
  },
  {
    title: "Multiple Sports",
    description: "Facilities for cricket, football, with pickleball and volleyball coming soon.",
    icon: Trophy,
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-truf-navy">Services Highlights</h2>
          <p className="text-gray-600">
            TURF50 offers comprehensive indoor sports facilities and services for all your sporting needs.
            Our expert team ensures a quality experience every time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="border-t-4 border-truf-navy hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4 text-truf-navy">
                  <service.icon size={48} />
                </div>
                <CardTitle className="text-xl text-truf-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/booking">
            <Button className="bg-truf-navy text-white hover:bg-opacity-90 text-lg px-8 py-6">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

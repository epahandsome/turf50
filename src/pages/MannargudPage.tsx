
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    period: "900-1200 CE",
    title: "Chola Dynasty",
    description: "Mannargudi flourished as an important religious and cultural center under the patronage of the Chola kings.",
  },
  {
    period: "13th-16th Century",
    title: "Pandya and Vijayanagara Rule",
    description: "The town witnessed architectural developments, including enhancements to the temple complex.",
  },
  {
    period: "16th-18th Century",
    title: "Nayak Period",
    description: "Rajagopalaswamy Temple was expanded and renovated during this period of cultural renaissance.",
  },
  {
    period: "1800s",
    title: "British Colonial Era",
    description: "Establishment of modern educational institutions and infrastructure developments began.",
  },
  {
    period: "1947 Onwards",
    title: "Post-Independence Development",
    description: "Mannargudi evolved as an educational hub with multiple schools, colleges, and cultural institutions.",
  },
  {
    period: "Present Day",
    title: "Modern Mannargudi",
    description: "A blend of traditional heritage and modern amenities, with focus on education, agriculture, and now sports infrastructure.",
  },
];

const MannargudPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-truf-lightcream">
        {/* Hero Section */}
        <section className="py-16 bg-truf-navy text-white">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Mannargudi</h1>
              <p className="text-xl max-w-3xl mx-auto">
                The Cultural Gem of Tamil Nadu with a Rich Historical Heritage
              </p>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center text-truf-navy">History & Development Timeline</h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-truf-navy"></div>
              
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 p-4">
                      <Card className="bg-white h-full">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-truf-navy">{event.title}</h3>
                          <p className="text-sm font-semibold text-truf-blue mb-2">{event.period}</p>
                          <p className="text-gray-700">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center">
                      <div className="bg-truf-cream h-8 w-8 rounded-full border-4 border-truf-navy z-10"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* TRB Raja Section */}
        <section className="py-16 bg-truf-cream">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-truf-navy">TRB Raja: Leading Mannargudi Forward</h2>
                <p className="text-gray-700 mb-4">
                  Under the leadership of TRB Raja, the current MLA, Mannargudi has been witnessing 
                  significant infrastructural development and cultural revival initiatives.
                </p>
                <p className="text-gray-700 mb-4">
                  His vision includes preserving the town's rich heritage while creating modern 
                  facilities and opportunities for the residents, especially the youth.
                </p>
              </div>
              <div>
                <Card className="bg-truf-navy text-white p-6">
                  <h3 className="text-xl font-bold mb-4 border-b border-truf-cream pb-2">AI 2026 Prediction</h3>
                  <p className="mb-4">
                    By 2026, Mannargudi is projected to become one of Tamil Nadu's key cultural tourism 
                    and sports destinations, with expanded educational institutions and improved 
                    connectivity to major cities.
                  </p>
                  <p>
                    The investment in sports infrastructure like Turf50 represents the beginning of 
                    a significant trend in combining traditional heritage with modern recreational facilities.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Photo Gallery */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center text-truf-navy">Glimpses of Mannargudi</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Temple Architecture" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Natural Beauty" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Cultural Festival" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Local Traditions" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Quote Banner */}
        <section className="py-16 bg-truf-navy text-white text-center">
          <div className="container-custom">
            <h2 className="text-4xl font-bold mb-4">"Rooted in Tradition. Rising for Tomorrow."</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Experience the blend of tradition and progress in Mannargudi.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MannargudPage;

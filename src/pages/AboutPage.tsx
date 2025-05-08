
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-truf-lightcream">
        {/* Hero Section */}
        <section className="py-16 bg-truf-navy text-white">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Turf50</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Bringing world-class sports facilities with local cultural pride to Mannargudi
              </p>
            </div>
          </div>
        </section>
        
        {/* Vision Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-truf-navy">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  At Turf50, we envision a community where sporting excellence meets cultural pride. 
                  Our mission is to provide world-class indoor sports facilities while celebrating and 
                  preserving the rich heritage of Mannargudi.
                </p>
                <p className="text-gray-700 mb-4">
                  We aim to nurture sporting talent, promote physical fitness, and create a space where 
                  tradition and modernity coexist harmoniously. Through our facilities, we hope to 
                  inspire the next generation of athletes while honoring our cultural roots.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556856249-0a303e4c44fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Turf50 Vision" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Founders Section */}
        <section className="py-16 bg-truf-cream">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center text-truf-navy">Our Founders</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Founder 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-truf-navy">Raj Kumar</h3>
                  <p className="text-gray-600 mb-2">Co-Founder & CEO</p>
                  <p className="text-gray-700">
                    A former state-level cricket player with a passion for sports development and cultural heritage.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Founder 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-truf-navy">Priya Venkat</h3>
                  <p className="text-gray-600 mb-2">Co-Founder & COO</p>
                  <p className="text-gray-700">
                    A sports management expert with experience in developing community sports programs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Founder 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-truf-navy">Suresh Raman</h3>
                  <p className="text-gray-600 mb-2">Technical Director</p>
                  <p className="text-gray-700">
                    An engineer by training with expertise in sports facility design and maintenance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Commitment Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-truf-navy">Our Commitment</h2>
              <p className="text-gray-700">
                At Turf50, we are committed to excellence in every aspect of our operation. From maintaining 
                world-class facilities to preserving cultural heritage, we strive to create an environment 
                where sports and culture thrive together.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-truf-navy">Quality</h3>
                <p className="text-gray-700">
                  We maintain the highest standards in our facilities, equipment, and services to provide 
                  an exceptional sporting experience.
                </p>
              </Card>
              
              <Card className="bg-white p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-truf-navy">Community</h3>
                <p className="text-gray-700">
                  We are dedicated to building a strong community of sports enthusiasts and cultural 
                  ambassadors in Mannargudi.
                </p>
              </Card>
              
              <Card className="bg-white p-6 text-center">
                <h3 className="text-xl font-bold mb-4 text-truf-navy">Heritage</h3>
                <p className="text-gray-700">
                  We honor and celebrate the rich cultural heritage of Mannargudi through our programs 
                  and community initiatives.
                </p>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Quote Banner */}
        <section className="py-16 bg-truf-navy text-white text-center">
          <div className="container-custom">
            <h2 className="text-4xl font-bold mb-4">"Rooted in Tradition. Rising for Tomorrow."</h2>
            <p className="text-xl max-w-3xl mx-auto">
              This is not just our slogan—it's our guiding philosophy at Turf50.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;

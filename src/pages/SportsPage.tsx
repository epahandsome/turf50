import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const SportsPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-truf-lightcream">
        {/* Hero Section */}
        <section className="py-16 bg-truf-navy text-white">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sports Facilities</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Discover our world-class sports facilities designed for both professional 
                athletes and enthusiastic amateurs
              </p>
            </div>
          </div>
        </section>
        
        {/* Sports Tabs */}
        <section className="py-16">
          <div className="container-custom">
            <Tabs defaultValue="cricket" className="w-full">
              <TabsList className="grid grid-cols-4 mb-10">
                <TabsTrigger value="cricket" className="py-3">
                  <span className="flex items-center">
                    <Trophy className="mr-2" /> Cricket
                  </span>
                </TabsTrigger>
                <TabsTrigger value="football" className="py-3">
                  <span className="flex items-center">
                    <Trophy className="mr-2" /> Football
                  </span>
                </TabsTrigger>
                <TabsTrigger value="pickleball" disabled className="py-3">
                  Pickleball (Coming Soon)
                </TabsTrigger>
                <TabsTrigger value="volleyball" disabled className="py-3">
                  Volleyball (Coming Soon)
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="cricket" className="mt-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-truf-navy">Cricket</h2>
                    <p className="text-gray-700 mb-4">
                      Our premium cricket facility features state-of-the-art pitches designed to international standards. 
                      The turf offers consistent bounce and turn, providing an authentic cricket experience.
                    </p>
                    <h3 className="text-xl font-bold mt-6 mb-3 text-truf-navy">Features</h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Professional-grade cricket pitch</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Bowling machines for practice</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Video analysis technology</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Professional coaching available</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Floodlights for night games</span>
                      </li>
                    </ul>
                    <Link to="/booking">
                      <Button className="bg-truf-navy text-white hover:bg-opacity-90">
                        Book Cricket Facility
                      </Button>
                    </Link>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1556856249-0a303e4c44fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Cricket Facility" 
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                
                {/* Benefits and Safety */}
                <div className="grid md:grid-cols-2 gap-8 mt-16">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-truf-navy flex items-center">
                      <Trophy className="mr-2" /> Benefits
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Improve batting technique with consistent pitch behavior</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Perfect your bowling on professional surfaces</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Practice in all weather conditions with indoor facility</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Get expert feedback with video analysis</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-truf-navy">Safety</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Safety nets surrounding the playing area</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>First aid facilities available on site</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Proper lighting to prevent eye strain</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Regular maintenance of equipment and surfaces</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="football" className="mt-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-truf-navy">Football</h2>
                    <p className="text-gray-700 mb-4">
                      Our indoor football field provides the perfect surface for fast-paced 5-a-side or 
                      7-a-side matches. The professional-grade artificial turf offers excellent ball control 
                      and player comfort.
                    </p>
                    <h3 className="text-xl font-bold mt-6 mb-3 text-truf-navy">Features</h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>FIFA-approved artificial turf</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Professional goal posts and nets</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Marked field for regulation play</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Floodlights for evening matches</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Score tracking system</span>
                      </li>
                    </ul>
                    <Link to="/booking">
                      <Button className="bg-truf-navy text-white hover:bg-opacity-90">
                        Book Football Facility
                      </Button>
                    </Link>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1589395937788-27deff9d5f7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Football Facility" 
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                
                {/* Benefits and Safety */}
                <div className="grid md:grid-cols-2 gap-8 mt-16">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-truf-navy flex items-center">
                      <Trophy className="mr-2" /> Benefits
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Play year-round regardless of weather</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Improve skills on professional-grade surface</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Fast-paced games with fewer players</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Perfect for team building and friendly matches</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-truf-navy">Safety</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Shock-absorbing turf to reduce injury risk</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Padded walls around the playing area</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>First aid facilities available on site</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Regular inspection and maintenance of facilities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-truf-navy text-white text-center">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Facilities?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Book now and enjoy premium sports facilities at Turf50 - Delta Pride
            </p>
            <Link to="/booking">
              <Button className="bg-truf-cream text-truf-navy hover:bg-opacity-90 text-lg px-8 py-6">
                Book Your Session
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SportsPage;

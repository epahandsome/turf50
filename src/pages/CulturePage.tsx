
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const CulturePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-truf-lightcream">
        {/* Hero Section */}
        <section className="py-16 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-truf-navy bg-opacity-70"></div>
          <div className="container-custom relative z-10 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The Rich Heritage of Mannargudi</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover the cultural tapestry that makes Mannargudi a jewel in Tamil Nadu's heritage crown
            </p>
          </div>
        </section>
        
        {/* History Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-truf-navy">History of Mannargudi</h2>
                <p className="text-gray-700 mb-4">
                  Mannargudi, originally known as "Mannai", derives its name from "Mannar" meaning king 
                  and "Kudi" meaning abode - the abode of kings. This ancient town has a rich history 
                  dating back to the Chola dynasty.
                </p>
                <p className="text-gray-700 mb-4">
                  The town grew around the magnificent Rajagopalaswamy Temple, dedicated to Lord Krishna, 
                  which was built during the 16th century. Over centuries, it has been an important center 
                  for religious, cultural, and educational activities in the region.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Historical Mannargudi" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Temple Section */}
        <section className="py-16 bg-truf-cream">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Rajagopalaswamy Temple" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-truf-navy">The Rajagopalaswamy Temple</h2>
                <p className="text-gray-700 mb-4">
                  The magnificent Rajagopalaswamy Temple is the crown jewel of Mannargudi. Dedicated to Lord Krishna, 
                  this temple features impressive architecture with a towering gopuram (gateway tower) that dominates 
                  the town's skyline.
                </p>
                <p className="text-gray-700 mb-4">
                  The temple is known for its intricate stone carvings, expansive courtyards, and stunning 
                  mandapams (pillared halls). It hosts the famous annual Brahmotsavam festival, drawing 
                  thousands of devotees from across the country.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sengamalam Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-truf-navy">Sengamalam: The Temple Elephant</h2>
                <p className="text-gray-700 mb-4">
                  One of the most beloved residents of Mannargudi is Sengamalam, the temple elephant. For decades, 
                  this majestic creature has been an integral part of the temple rituals and festivals.
                </p>
                <p className="text-gray-700 mb-4">
                  Sengamalam participates in the temple processions, receives offerings from devotees, and is 
                  considered a divine blessing. The elephant's presence symbolizes the harmonious coexistence 
                  of nature and spirituality in the town's cultural fabric.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Temple Elephant" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Heritage Schools */}
        <section className="py-16 bg-truf-cream">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-truf-navy text-center">Heritage Schools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-truf-navy">Raja's Higher Secondary School</h3>
                  <p className="text-gray-700">
                    One of the oldest educational institutions in the region, established during the British era.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-truf-navy">Vedic College</h3>
                  <p className="text-gray-700">
                    A center for traditional Vedic education, preserving ancient knowledge systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-truf-navy">Municipal School</h3>
                  <p className="text-gray-700">
                    Historic public school that has educated generations of Mannargudi residents.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-truf-navy">Sanskrit Pathasala</h3>
                  <p className="text-gray-700">
                    Traditional school focusing on Sanskrit language and literature.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Living Traditions */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-truf-navy text-center">Living Traditions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-truf-navy">Festivals</h3>
                <p className="text-gray-700 mb-2">
                  Mannargudi celebrates numerous festivals throughout the year, with the temple's Brahmotsavam 
                  being the grandest. Other celebrations include Thai Poosam, Panguni Uthiram, and Vaikunta Ekadasi.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-truf-navy">Music & Dance</h3>
                <p className="text-gray-700 mb-2">
                  The town has a rich tradition of Carnatic music and Bharatanatyam dance. Annual cultural 
                  festivals showcase local talents and feature renowned artists from across Tamil Nadu.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-truf-navy">Cuisine</h3>
                <p className="text-gray-700 mb-2">
                  Mannargudi's cuisine is characterized by authentic Tamil flavors. Special dishes include 
                  the temple prasadam, traditional vegetarian fare, and unique local sweetmeats.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-truf-navy">Arts & Crafts</h3>
                <p className="text-gray-700 mb-2">
                  Local artisans preserve traditional crafts including bronze casting, silk weaving, and 
                  wooden toy making that have been passed down through generations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quote Banner */}
        <section className="py-16 bg-truf-navy text-white text-center">
          <div className="container-custom">
            <h2 className="text-4xl font-bold mb-4">"Rooted in Tradition. Rising for Tomorrow."</h2>
            <p className="text-xl max-w-3xl mx-auto">
              At Turf50, we honor Mannargudi's rich heritage while building modern sporting excellence.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CulturePage;


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-truf-lightcream">
        {/* Hero Section */}
        <section className="py-16 bg-truf-navy text-white">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl max-w-3xl mx-auto">
                We'd love to hear from you! Reach out with any questions about our facilities or bookings.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container-custom grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-truf-navy">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-truf-navy mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-truf-navy">Address</h3>
                    <p className="text-gray-700">Turf50, Mannargudi, Tamil Nadu – 614001, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-truf-navy mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-truf-navy">Phone</h3>
                    <p className="text-gray-700">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-truf-navy mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-truf-navy">Email</h3>
                    <p className="text-gray-700">info@turf50.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-truf-navy mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-truf-navy">Operating Hours</h3>
                    <p className="text-gray-700">Monday - Sunday: 6:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-bold text-lg text-truf-navy mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="h-10 w-10 bg-truf-navy text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 bg-truf-navy text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 bg-truf-navy text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-truf-navy">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Your phone number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" type="text" placeholder="Subject of your message" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-truf-navy text-white hover:bg-opacity-90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Google Maps */}
        <section className="py-16 bg-truf-cream">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center text-truf-navy">Find Us</h2>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for Google Maps - in a real project, replace with actual Google Maps embed */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600 text-center">
                  Google Maps Embed <br />
                  <span className="text-sm">(Will be replaced with actual Google Maps in implementation)</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quote Banner */}
        <section className="py-16 bg-truf-navy text-white text-center">
          <div className="container-custom">
            <h2 className="text-4xl font-bold mb-4">"Experience the spirit of Mannargudi through Turf50"</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We look forward to welcoming you to our premier sports facility.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

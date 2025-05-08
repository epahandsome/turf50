
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const pricingOptions = [
  {
    title: "Weekday Morning",
    price: "₹500",
    duration: "per hour",
    features: [
      "6:00 AM - 5:00 PM",
      "Full facility access",
      "Equipment included",
      "Video analysis available"
    ],
    popular: false
  },
  {
    title: "Weekday Night",
    price: "₹650",
    duration: "per hour",
    features: [
      "5:00 PM - 11:00 PM",
      "Floodlight premium",
      "Full facility access",
      "Equipment included"
    ],
    popular: true
  },
  {
    title: "Weekend Morning",
    price: "₹750",
    duration: "per hour",
    features: [
      "6:00 AM - 5:00 PM",
      "Weekend premium",
      "Full facility access",
      "Equipment included"
    ],
    popular: false
  },
  {
    title: "Weekend Night",
    price: "₹900",
    duration: "per hour",
    features: [
      "5:00 PM - 11:00 PM",
      "Weekend & floodlight premium",
      "Full facility access",
      "Equipment included"
    ],
    popular: false
  }
];

const extraOptions = [
  {
    title: "5-Hour Package",
    description: "Save 10% with our 5-hour package deal",
    discount: "10% off regular rates"
  },
  {
    title: "Extra Hour",
    description: "Add additional hours at discounted rates",
    discount: "5% off regular rates"
  }
];

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <div className="bg-truf-lightcream py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-truf-navy">Book Our Facilities</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of time slots and pricing options to book the perfect session for your sporting needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pricingOptions.map((option, index) => (
              <Card 
                key={index} 
                className={`${option.popular ? 'border-2 border-truf-cream relative' : ''} h-full`}
              >
                {option.popular && (
                  <div className="absolute top-0 right-0 bg-truf-cream text-truf-navy font-bold px-3 py-1 text-sm rounded-bl-lg">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-truf-navy">{option.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{option.price}</span>
                    <span className="text-gray-500 ml-1">{option.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${selectedPlan === option.title ? 'bg-truf-navy' : 'bg-truf-blue'} text-white hover:bg-opacity-90`}
                    onClick={() => setSelectedPlan(option.title)}
                  >
                    Select
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {extraOptions.map((option, index) => (
              <Card key={index} className="bg-truf-navy text-white">
                <CardHeader>
                  <CardTitle>{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{option.description}</p>
                  <p className="font-bold mt-2">{option.discount}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Book Your Slot</CardTitle>
              <CardDescription>Choose your preferred date and time</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Select Date</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Select Time</Label>
                    <Input 
                      id="time" 
                      type="time" 
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hours">Hours</Label>
                    <Input id="hours" type="number" min="1" max="5" placeholder="1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sport">Select Sport</Label>
                    <select 
                      id="sport" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="cricket">Cricket</option>
                      <option value="football">Football</option>
                    </select>
                  </div>
                </div>
                
                <Button className="w-full bg-truf-cream text-truf-navy hover:bg-opacity-90 text-lg py-6">
                  Proceed to Payment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;

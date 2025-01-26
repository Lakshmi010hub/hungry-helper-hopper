import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const donateRef = useRef<HTMLDivElement>(null);

  const scrollToDonate = () => {
    donateRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white py-32">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Are You Hungry?
          </h1>
          <p className="text-xl md:text-2xl mb-12 animate-fade-in opacity-90">
            Help us fight hunger by donating food today
          </p>
          <Button 
            onClick={scrollToDonate}
            size="lg" 
            className="bg-white text-orange-600 hover:bg-orange-100 font-semibold text-lg px-12 py-6 rounded-full shadow-lg transition-all duration-300 animate-fade-in"
          >
            Donate Food Now
          </Button>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">1M+</h3>
              <p className="text-gray-600">Meals Donated</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">500+</h3>
              <p className="text-gray-600">Partner Organizations</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">100K+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Donate Section */}
      <div ref={donateRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Ready to Donate? It's Simple!
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-orange-600">Contact Us</h3>
                <p className="text-gray-600">
                  Reach out through our contact form or hotline to start the donation process
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-orange-600">Schedule Pickup</h3>
                <p className="text-gray-600">
                  Set a convenient time for our team to collect your food donation
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-orange-600">Make a Difference</h3>
                <p className="text-gray-600">
                  Your donation helps feed those in need in our community
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions about donating? We're here to help! Contact us today.
          </p>
          <Button 
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                We're dedicated to fighting hunger in our community through food donations and partnerships.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: info@hungerhelper.org<br />
                Phone: (555) 123-4567
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Hunger Helper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
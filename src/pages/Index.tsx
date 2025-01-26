import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const donateRef = useRef<HTMLDivElement>(null);

  const scrollToDonate = () => {
    donateRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Are You Hungry?</h1>
          <p className="text-xl mb-8">Help us fight hunger by donating food today</p>
          <Button 
            onClick={scrollToDonate}
            size="lg" 
            className="bg-white text-orange-600 hover:bg-orange-100 font-semibold text-lg px-8"
          >
            Donate Food Now
          </Button>
        </div>
      </div>

      {/* Ready to Donate Section */}
      <div ref={donateRef} className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ready to Donate? It's Simple!</h2>
          <div className="grid md:grid-cols-3 gap-8 px-4">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">1. Contact Us</h3>
              <p className="text-gray-600">Reach out through our contact form or hotline</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">2. Schedule Pickup</h3>
              <p className="text-gray-600">Set a convenient time for food collection</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">3. Make a Difference</h3>
              <p className="text-gray-600">Your donation helps feed those in need</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-krylic-light-yellow via-krylic-yellow to-krylic-light-beige py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-krylic-beige text-krylic-charcoal px-4 py-2 rounded-full text-sm font-krylic-serif mb-4">
                🧽 Professional Shoe Care Services
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-krylic-elegant font-bold text-krylic-charcoal mb-6 animate-fade-in leading-tight">
              Premium Shoe
              <span className="block text-krylic-muted-blue">
                <span className="krylic-underline">Restoration & Care</span>
              </span>
            </h1>
            
            <p className="text-xl text-krylic-muted-blue mb-8 animate-slide-up font-krylic-serif leading-relaxed">
              Professional cleaning, restoration, and customization services. From gentle maintenance to complete restoration, we bring your footwear back to life with meticulous attention to detail.
            </p>
            
          </div>

          {/* Right Content - Service Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-krylic-light-yellow/80 backdrop-blur-sm rounded-2xl p-6 border border-krylic-beige shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🧽</div>
              <h3 className="font-krylic-serif font-semibold text-krylic-charcoal mb-2">Professional Cleaning</h3>
              <p className="text-sm text-krylic-muted-blue font-krylic-serif">
                Deep cleaning, deodorizing, and sanitizing services for all shoe types
              </p>
            </div>
            
            <div className="bg-krylic-light-yellow/80 backdrop-blur-sm rounded-2xl p-6 border border-krylic-beige shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-krylic-serif font-semibold text-krylic-charcoal mb-2">Repair & Restoration</h3>
              <p className="text-sm text-krylic-muted-blue font-krylic-serif">
                Sole repair, regluing, and complete shoe restoration services
              </p>
            </div>
            
            <div className="bg-krylic-light-yellow/80 backdrop-blur-sm rounded-2xl p-6 border border-krylic-beige shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-krylic-serif font-semibold text-krylic-charcoal mb-2">Customization</h3>
              <p className="text-sm text-krylic-muted-blue font-krylic-serif">
                Custom designs, colors, and personalized shoe modifications
              </p>
            </div>
            
            <div className="bg-krylic-light-yellow/80 backdrop-blur-sm rounded-2xl p-6 border border-krylic-beige shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-krylic-serif font-semibold text-krylic-charcoal mb-2">Home Service</h3>
              <p className="text-sm text-krylic-muted-blue font-krylic-serif">
                Convenient pickup and delivery service for your busy lifestyle
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-krylic-muted-blue font-krylic-serif italic mb-4">
            Ad Majorem Dei Gloriam
          </p>
          <div className="flex justify-center items-center space-x-8 text-krylic-muted-blue">
            <div className="text-center">
              <div className="font-krylic-serif font-semibold text-2xl text-krylic-charcoal">500+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="font-krylic-serif font-semibold text-2xl text-krylic-charcoal">1000+</div>
              <div className="text-sm">Shoes Restored</div>
            </div>
            <div className="text-center">
              <div className="font-krylic-serif font-semibold text-2xl text-krylic-charcoal">5★</div>
              <div className="text-sm">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  const { siteSettings, loading } = useSiteSettings();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-krylic-primary-light backdrop-blur-sm border-b border-krylic-border shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <button 
            onClick={onMenuClick}
            className="flex items-center space-x-2 sm:space-x-3 text-krylic-text hover:text-krylic-text-light transition-colors duration-200 group flex-1 min-w-0"
          >
            {loading ? (
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-krylic-beige rounded-full animate-pulse flex-shrink-0" />
            ) : (
              <div className="relative flex-shrink-0">
                <img 
                  src={siteSettings?.site_logo || "/logo.jpg"} 
                  alt={siteSettings?.site_name || "Krylic"}
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-krylic-border group-hover:ring-krylic-accent transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "/logo.jpg";
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-krylic-accent rounded-full border-2 border-krylic-primary-light"></div>
              </div>
            )}
            <div className="flex flex-col items-start min-w-0 flex-1">
              <h1 className="text-lg sm:text-2xl lg:text-3xl font-krylic-elegant font-semibold tracking-wide truncate">
                {loading ? (
                  <div className="w-20 h-4 sm:w-28 sm:h-6 lg:h-8 bg-krylic-beige rounded animate-pulse" />
                ) : (
                     <span className="krylic-underline">Krylic Custom Kicks</span>
                )}
              </h1>
              <p className="text-xs sm:text-sm lg:text-base font-krylic-serif italic text-krylic-text-light truncate">
                Premium Shoe Care & Restoration Services
              </p>
            </div>
          </button>

          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <button 
              onClick={onCartClick}
              className="relative p-2 sm:p-3 text-krylic-text hover:text-krylic-text-white hover:bg-krylic-accent rounded-full transition-all duration-200 group"
            >
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-200" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-krylic-accent text-krylic-secondary text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center animate-bounce-gentle font-medium">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-krylic-light-yellow backdrop-blur-sm border-b border-krylic-beige shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={onMenuClick}
            className="flex items-center space-x-3 text-krylic-charcoal hover:text-krylic-muted-blue transition-colors duration-200 group"
          >
            {loading ? (
              <div className="w-12 h-12 bg-krylic-beige rounded-full animate-pulse" />
            ) : (
              <div className="relative">
                <img 
                  src={siteSettings?.site_logo || "/logo.jpg"} 
                  alt={siteSettings?.site_name || "Krylic"}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-krylic-beige group-hover:ring-krylic-accent transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "/logo.jpg";
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-krylic-beige rounded-full border-2 border-krylic-light-yellow"></div>
              </div>
            )}
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-krylic-elegant font-semibold tracking-wide">
                {loading ? (
                  <div className="w-28 h-8 bg-krylic-beige rounded animate-pulse" />
                ) : (
                  <span className="krylic-underline">Krylic Consumer Goods Trading </span>
                )}
              </h1>
              <p className="text-xs font-krylic-serif italic text-krylic-muted-blue -mt-1">
                Ad Majorem Dei Gloriam
              </p>
            </div>
          </button>

          <div className="flex items-center space-x-2">
            <button 
              onClick={onCartClick}
              className="relative p-3 text-krylic-muted-blue hover:text-krylic-charcoal hover:bg-krylic-yellow rounded-full transition-all duration-200 group"
            >
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-krylic-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce-gentle font-medium">
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
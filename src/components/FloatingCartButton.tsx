import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface FloatingCartButtonProps {
  itemCount: number;
  onCartClick: () => void;
}

const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({ itemCount, onCartClick }) => {
  if (itemCount === 0) return null;

  return (
    <button
      onClick={onCartClick}
      className="fixed bottom-6 right-6 bg-krylic-accent text-krylic-secondary p-4 rounded-full shadow-xl hover:bg-krylic-accent-dark transition-all duration-300 transform hover:scale-110 z-40 md:hidden ring-2 ring-krylic-accent hover:ring-krylic-accent-dark"
    >
      <div className="relative">
        <ShoppingCart className="h-6 w-6" />
        <span className="absolute -top-2 -right-2 bg-krylic-secondary text-krylic-primary-light text-xs rounded-full h-5 w-5 flex items-center justify-center font-krylic-serif font-medium animate-bounce-gentle">
          {itemCount}
        </span>
      </div>
    </button>
  );
};

export default FloatingCartButton;
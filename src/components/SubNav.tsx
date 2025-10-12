import React from 'react';
import { useCategories } from '../hooks/useCategories';

interface SubNavProps {
  selectedCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const SubNav: React.FC<SubNavProps> = ({ selectedCategory, onCategoryClick }) => {
  const { categories, loading } = useCategories();

  return (
    <div className="bg-krylic-light-yellow/90 backdrop-blur-md border-b border-krylic-beige mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 overflow-x-auto py-4 scrollbar-hide">
          {loading ? (
            <div className="flex space-x-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="h-10 w-24 bg-krylic-beige rounded-full animate-pulse" />
              ))}
            </div>
          ) : (
            <>
              <button
                onClick={() => onCategoryClick('all')}
                className={`px-6 py-2.5 rounded-full text-sm font-krylic-serif transition-all duration-300 border-2 ${
                  selectedCategory === 'all'
                    ? 'bg-krylic-charcoal text-krylic-light-yellow border-krylic-charcoal shadow-lg'
                    : 'bg-krylic-light-yellow text-krylic-muted-blue border-krylic-beige hover:border-krylic-charcoal hover:bg-krylic-yellow'
                }`}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onCategoryClick(c.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-krylic-serif transition-all duration-300 border-2 flex items-center space-x-2 ${
                    selectedCategory === c.id
                      ? 'bg-krylic-charcoal text-krylic-light-yellow border-krylic-charcoal shadow-lg'
                      : 'bg-krylic-light-yellow text-krylic-muted-blue border-krylic-beige hover:border-krylic-charcoal hover:bg-krylic-yellow'
                  }`}
                >
                  <span className="text-lg">{c.icon}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubNav;



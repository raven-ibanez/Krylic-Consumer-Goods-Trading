import React from 'react';
import { useCategories } from '../hooks/useCategories';

interface SubNavProps {
  selectedCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const SubNav: React.FC<SubNavProps> = ({ selectedCategory, onCategoryClick }) => {
  const { categories, loading } = useCategories();

  return (
    <div className="bg-krylic-primary-light/95 backdrop-blur-md border-b border-krylic-border mt-16 sm:mt-18">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 overflow-x-auto py-3 sm:py-4 scrollbar-hide">
          {loading ? (
            <div className="flex space-x-2 sm:space-x-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="h-8 w-16 sm:h-10 sm:w-24 bg-krylic-beige rounded-full animate-pulse flex-shrink-0" />
              ))}
            </div>
          ) : (
            <>
              <button
                onClick={() => onCategoryClick('all')}
                className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-krylic-serif transition-all duration-300 border flex-shrink-0 ${
                  selectedCategory === 'all'
                    ? 'bg-krylic-accent text-krylic-secondary border-krylic-accent shadow-lg'
                    : 'bg-krylic-surface text-krylic-text border-krylic-border hover:border-krylic-accent hover:bg-krylic-accent-light'
                }`}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onCategoryClick(c.id)}
                  className={`px-3 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-krylic-serif transition-all duration-300 border flex items-center space-x-1 sm:space-x-2 flex-shrink-0 ${
                    selectedCategory === c.id
                      ? 'bg-krylic-accent text-krylic-secondary border-krylic-accent shadow-lg'
                      : 'bg-krylic-surface text-krylic-text border-krylic-border hover:border-krylic-accent hover:bg-krylic-accent-light'
                  }`}
                >
                  <span className="text-sm sm:text-lg">{c.icon}</span>
                  <span className="whitespace-nowrap">{c.name}</span>
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



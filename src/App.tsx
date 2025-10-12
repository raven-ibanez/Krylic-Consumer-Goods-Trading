import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCart } from './hooks/useCart';
import Header from './components/Header';
import Hero from './components/Hero';
import SubNav from './components/SubNav';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import FloatingCartButton from './components/FloatingCartButton';
import AdminDashboard from './components/AdminDashboard';
import { useMenu } from './hooks/useMenu';

function MainApp() {
  const cart = useCart();
  const { menuItems } = useMenu();
  const [currentView, setCurrentView] = React.useState<'menu' | 'cart' | 'checkout'>('menu');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const handleViewChange = (view: 'menu' | 'cart' | 'checkout') => {
    setCurrentView(view);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Scroll to the category section when a category is selected
    if (categoryId !== 'all') {
      setTimeout(() => {
        const element = document.getElementById(categoryId);
        if (element) {
          const headerHeight = 64; // Header height
          const subNavHeight = 60; // SubNav height
          const offset = headerHeight + subNavHeight + 20;
          const elementPosition = element.offsetTop - offset;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  // Don't filter menu items here - let Menu component handle its own filtering
  // The SubNav is just for navigation, Menu component shows all items organized by category

  return (
    <div className="min-h-screen bg-krylic-light-yellow font-krylic-serif">
      <Header 
        cartItemsCount={cart.getTotalItems()}
        onCartClick={() => handleViewChange('cart')}
        onMenuClick={() => handleViewChange('menu')}
      />
      <SubNav selectedCategory={selectedCategory} onCategoryClick={handleCategoryClick} />
      
      {currentView === 'menu' && (
        <>
          <Hero />
          <Menu 
            menuItems={menuItems}
            addToCart={cart.addToCart}
            cartItems={cart.cartItems}
            updateQuantity={cart.updateQuantity}
          />
        </>
      )}
      
      {currentView === 'cart' && (
        <Cart 
          cartItems={cart.cartItems}
          updateQuantity={cart.updateQuantity}
          removeFromCart={cart.removeFromCart}
          clearCart={cart.clearCart}
          getTotalPrice={cart.getTotalPrice}
          onContinueShopping={() => handleViewChange('menu')}
          onCheckout={() => handleViewChange('checkout')}
        />
      )}
      
      {currentView === 'checkout' && (
        <Checkout 
          cartItems={cart.cartItems}
          totalPrice={cart.getTotalPrice()}
          onBack={() => handleViewChange('cart')}
        />
      )}
      
      {currentView === 'menu' && (
        <FloatingCartButton 
          itemCount={cart.getTotalItems()}
          onCartClick={() => handleViewChange('cart')}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { Plus, Minus, X, ShoppingCart } from 'lucide-react';
import { MenuItem, Variation, AddOn } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, quantity?: number, variation?: Variation, addOns?: AddOn[]) => void;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ 
  item, 
  onAddToCart, 
  quantity, 
  onUpdateQuantity 
}) => {
  const [showCustomization, setShowCustomization] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingItem, setPendingItem] = useState<MenuItem | null>(null);
  const [selectedVariation, setSelectedVariation] = useState<Variation | undefined>(
    item.variations?.[0]
  );
  const [selectedAddOns, setSelectedAddOns] = useState<(AddOn & { quantity: number })[]>([]);

  const calculatePrice = () => {
    // Use effective price (discounted or regular) as base
    let price = item.effectivePrice || item.basePrice;
    if (selectedVariation) {
      price = (item.effectivePrice || item.basePrice) + selectedVariation.price;
    }
    selectedAddOns.forEach(addOn => {
      price += addOn.price * addOn.quantity;
    });
    return price;
  };

  const handleAddToCart = () => {
    if (item.variations?.length || item.addOns?.length) {
      setShowCustomization(true);
    } else {
      setPendingItem(item);
      setShowConfirmModal(true);
    }
  };

  const handleConfirmAddToCart = () => {
    if (pendingItem) {
      onAddToCart(pendingItem, 1);
      setShowConfirmModal(false);
      setPendingItem(null);
    }
  };

  const handleCancelAddToCart = () => {
    setShowConfirmModal(false);
    setPendingItem(null);
  };

  const handleCustomizedAddToCart = () => {
    // Convert selectedAddOns back to regular AddOn array for cart
    const addOnsForCart: AddOn[] = selectedAddOns.flatMap(addOn => 
      Array(addOn.quantity).fill({ ...addOn, quantity: undefined })
    );
    onAddToCart(item, 1, selectedVariation, addOnsForCart);
    setShowCustomization(false);
    setSelectedAddOns([]);
  };

  const handleIncrement = () => {
    onUpdateQuantity(item.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      onUpdateQuantity(item.id, quantity - 1);
    }
  };

  const updateAddOnQuantity = (addOn: AddOn, quantity: number) => {
    setSelectedAddOns(prev => {
      const existingIndex = prev.findIndex(a => a.id === addOn.id);
      
      if (quantity === 0) {
        // Remove add-on if quantity is 0
        return prev.filter(a => a.id !== addOn.id);
      }
      
      if (existingIndex >= 0) {
        // Update existing add-on quantity
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], quantity };
        return updated;
      } else {
        // Add new add-on with quantity
        return [...prev, { ...addOn, quantity }];
      }
    });
  };

  const groupedAddOns = item.addOns?.reduce((groups, addOn) => {
    const category = addOn.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(addOn);
    return groups;
  }, {} as Record<string, AddOn[]>);

  return (
    <>
      <div className={`bg-krylic-surface rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group animate-scale-in border border-krylic-border ${!item.available ? 'opacity-60' : ''}`}>
        {/* Image Container with Badges */}
        <div className="relative h-48 bg-gradient-to-br from-krylic-accent-light to-krylic-primary">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
          ) : null}
          <div className={`absolute inset-0 flex items-center justify-center ${item.image ? 'hidden' : ''}`}>
            <div className="text-6xl opacity-20 text-krylic-text">🧽</div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {item.isOnDiscount && item.discountPrice && (
              <div className="bg-gradient-to-r from-krylic-accent to-krylic-accent-dark text-krylic-secondary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                SALE
              </div>
            )}
            {item.popular && (
              <div className="bg-gradient-to-r from-krylic-secondary to-krylic-secondary-light text-krylic-primary-light text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                ⭐ POPULAR
              </div>
            )}
          </div>
          
          {!item.available && (
            <div className="absolute top-3 right-3 bg-krylic-secondary text-krylic-primary-light text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              UNAVAILABLE
            </div>
          )}
          
          {/* Discount Percentage Badge */}
          {item.isOnDiscount && item.discountPrice && (
            <div className="absolute bottom-3 right-3 bg-krylic-surface/90 backdrop-blur-sm text-krylic-text text-xs font-bold px-2 py-1 rounded-full shadow-lg border border-krylic-border">
              {Math.round(((item.basePrice - item.discountPrice) / item.basePrice) * 100)}% OFF
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-lg font-krylic-serif font-semibold text-krylic-text leading-tight flex-1 pr-2">{item.name}</h4>
            {item.variations && item.variations.length > 0 && (
              <div className="text-xs text-krylic-secondary bg-krylic-accent px-2 py-1 rounded-full whitespace-nowrap font-bold">
                {item.variations.length} sizes
              </div>
            )}
          </div>
          
          <p className={`text-sm mb-4 leading-relaxed font-krylic-serif ${!item.available ? 'text-krylic-text-light/60' : 'text-krylic-text-light'}`}>
            {!item.available ? 'Currently Unavailable' : item.description}
          </p>
          
          {/* Pricing Section */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              {item.isOnDiscount && item.discountPrice ? (
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-krylic-accent">
                      ₱{item.discountPrice.toFixed(2)}
                    </span>
                    <span className="text-sm text-krylic-text-light line-through">
                      ₱{item.basePrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-xs text-krylic-text-light">
                    Save ₱{(item.basePrice - item.discountPrice).toFixed(2)}
                  </div>
                </div>
              ) : (
                <div className="text-2xl font-bold text-krylic-text">
                  ₱{item.basePrice.toFixed(2)}
                </div>
              )}
              
              {item.variations && item.variations.length > 0 && (
                <div className="text-xs text-krylic-text-light mt-1">
                  Starting price
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex-shrink-0">
              {!item.available ? (
                <button
                  disabled
                  className="bg-krylic-border text-krylic-text-light px-4 py-2.5 rounded-xl cursor-not-allowed font-krylic-serif font-medium text-sm"
                >
                  Unavailable
                </button>
              ) : quantity === 0 ? (
                <button
                  onClick={handleAddToCart}
                  className="bg-krylic-accent text-white px-5 py-2.5 rounded-xl hover:bg-krylic-accent-dark transition-all duration-200 transform hover:scale-105 font-krylic-serif font-medium text-sm shadow-lg hover:shadow-xl border border-krylic-accent"
                >
                  {item.variations?.length || item.addOns?.length ? 'Customize' : 'Add to Cart'}
                </button>
              ) : (
                <div className="flex items-center space-x-2 bg-krylic-accent-light rounded-xl p-1 border border-krylic-border shadow-sm">
                  <button
                    onClick={handleDecrement}
                    className="p-2 hover:bg-krylic-accent-light rounded-lg transition-colors duration-200 hover:scale-110"
                  >
                    <Minus className="h-4 w-4 text-krylic-text" />
                  </button>
                  <span className="font-krylic-serif font-bold text-krylic-text min-w-[28px] text-center text-sm">{quantity}</span>
                  <button
                    onClick={handleIncrement}
                    className="p-2 hover:bg-krylic-accent-light rounded-lg transition-colors duration-200 hover:scale-110"
                  >
                    <Plus className="h-4 w-4 text-krylic-text" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Add-ons indicator */}
          {item.addOns && item.addOns.length > 0 && (
            <div className="flex items-center space-x-1 text-xs text-krylic-secondary bg-krylic-accent px-2 py-1 rounded-lg font-bold">
              <span>+</span>
              <span>{item.addOns.length} add-on{item.addOns.length > 1 ? 's' : ''} available</span>
            </div>
          )}
        </div>
      </div>

      {/* Add to Cart Confirmation Modal */}
      {showConfirmModal && pendingItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-krylic-surface rounded-2xl max-w-md w-full shadow-2xl border border-krylic-border">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-krylic-accent rounded-full flex items-center justify-center mr-4">
                  <ShoppingCart className="h-6 w-6 text-krylic-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-krylic-elegant font-semibold text-krylic-text">
                    Add to Cart
                  </h3>
                  <p className="text-sm text-krylic-text-light">
                    Confirm your selection
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-3 p-4 bg-krylic-accent-light/50 rounded-xl border border-krylic-border">
                  {pendingItem.image && (
                    <img 
                      src={pendingItem.image} 
                      alt={pendingItem.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <h4 className="font-krylic-serif font-semibold text-krylic-text">
                      {pendingItem.name}
                    </h4>
                    <p className="text-sm text-krylic-text-light">
                      ₱{pendingItem.basePrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleCancelAddToCart}
                  className="flex-1 bg-krylic-accent text-krylic-secondary py-3 rounded-xl hover:bg-krylic-accent-dark transition-all duration-200 font-krylic-serif font-medium border border-krylic-accent"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmAddToCart}
                  className="flex-1 bg-krylic-secondary text-white py-3 rounded-xl hover:bg-krylic-secondary-light transition-all duration-200 font-krylic-serif font-medium shadow-lg hover:shadow-xl border border-krylic-secondary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Customization Modal */}
      {showCustomization && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-krylic-surface rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-krylic-border">
            <div className="sticky top-0 bg-krylic-accent border-b border-krylic-border p-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h3 className="text-xl font-semibold text-krylic-text">Customize {item.name}</h3>
                <p className="text-sm text-krylic-text-light mt-1">Choose your preferences</p>
              </div>
              <button
                onClick={() => setShowCustomization(false)}
                className="p-2 hover:bg-krylic-accent-dark rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5 text-krylic-text" />
              </button>
            </div>

            <div className="p-6">
              {/* Size Variations */}
              {item.variations && item.variations.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-krylic-text mb-4">Choose Size</h4>
                  <div className="space-y-3">
                    {item.variations.map((variation) => (
                      <label
                        key={variation.id}
                        className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                          selectedVariation?.id === variation.id
                            ? 'border-krylic-accent bg-krylic-accent-light'
                            : 'border-krylic-border hover:border-krylic-accent hover:bg-krylic-accent-light'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="variation"
                            checked={selectedVariation?.id === variation.id}
                            onChange={() => setSelectedVariation(variation)}
                            className="text-krylic-text focus:ring-krylic-text"
                          />
                          <span className="font-medium text-krylic-text">{variation.name}</span>
                        </div>
                        <span className="text-krylic-text font-semibold">
                          ₱{((item.effectivePrice || item.basePrice) + variation.price).toFixed(2)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Add-ons */}
              {groupedAddOns && Object.keys(groupedAddOns).length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-krylic-text mb-4">Add-ons</h4>
                  {Object.entries(groupedAddOns).map(([category, addOns]) => (
                    <div key={category} className="mb-4">
                      <h5 className="text-sm font-medium text-krylic-text-light mb-3 capitalize">
                        {category.replace('-', ' ')}
                      </h5>
                      <div className="space-y-3">
                        {addOns.map((addOn) => (
                          <div
                            key={addOn.id}
                            className="flex items-center justify-between p-4 border border-krylic-border rounded-xl hover:border-krylic-accent hover:bg-krylic-accent-light transition-all duration-200"
                          >
                            <div className="flex-1">
                              <span className="font-medium text-krylic-text">{addOn.name}</span>
                              <div className="text-sm text-krylic-text-light">
                                {addOn.price > 0 ? `₱${addOn.price.toFixed(2)} each` : 'Free'}
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              {selectedAddOns.find(a => a.id === addOn.id) ? (
                                <div className="flex items-center space-x-2 bg-krylic-accent-light rounded-xl p-1 border border-krylic-border">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const current = selectedAddOns.find(a => a.id === addOn.id);
                                      updateAddOnQuantity(addOn, (current?.quantity || 1) - 1);
                                    }}
                                    className="p-1.5 hover:bg-krylic-accent rounded-lg transition-colors duration-200"
                                  >
                                    <Minus className="h-3 w-3 text-krylic-text" />
                                  </button>
                                  <span className="font-semibold text-krylic-text min-w-[24px] text-center text-sm">
                                    {selectedAddOns.find(a => a.id === addOn.id)?.quantity || 0}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const current = selectedAddOns.find(a => a.id === addOn.id);
                                      updateAddOnQuantity(addOn, (current?.quantity || 0) + 1);
                                    }}
                                    className="p-1.5 hover:bg-krylic-accent rounded-lg transition-colors duration-200"
                                  >
                                    <Plus className="h-3 w-3 text-krylic-text" />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => updateAddOnQuantity(addOn, 1)}
                                  className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-krylic-accent to-krylic-accent-dark text-krylic-secondary rounded-xl hover:from-krylic-accent-dark hover:to-krylic-accent transition-all duration-200 text-sm font-medium shadow-lg"
                                >
                                  <Plus className="h-3 w-3" />
                                  <span>Add</span>
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Price Summary */}
              <div className="border-t border-krylic-border pt-4 mb-6">
                <div className="flex items-center justify-between text-2xl font-bold text-krylic-text">
                  <span>Total:</span>
                  <span className="text-krylic-text">₱{calculatePrice().toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCustomizedAddToCart}
                className="w-full bg-gradient-to-r from-krylic-accent to-krylic-accent-dark text-white py-4 rounded-xl hover:from-krylic-accent-dark hover:to-krylic-accent transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 border border-krylic-accent"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart - ₱{calculatePrice().toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItemCard;
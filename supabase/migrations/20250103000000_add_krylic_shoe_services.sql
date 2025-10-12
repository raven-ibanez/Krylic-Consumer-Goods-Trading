/*
  # Add Krylic Consumer Goods Trading - Shoe Services and Products

  1. New Categories
    - Add services, products, machines categories for Krylic shoe care business

  2. New Menu Items (Services & Products)
    - Shoe Cleaning Services: Standard Clean, Deep Clean, Signature Clean
    - Reglue Services: Minor separations, Full single sole, Full multiple sole
    - Cleaning Products: Various sizes and types of shoe cleaning solutions
    - Machines: Professional shoe cleaning equipment

  3. Features
    - Auto-generated UUIDs for all items
    - Detailed descriptions with service details and product specifications
    - Professional pricing for services and retail pricing for products
    - High-quality shoe care images
    - Proper categorization for easy browsing
*/

-- First, add the new categories for Krylic shoe care business
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('shoe-cleaning', 'Shoe Cleaning Services', '🧽', 1, true),
  ('reglue-services', 'Reglue Services', '🔧', 2, true),
  ('cleaning-products', 'Cleaning Products', '🧴', 3, true),
  ('machines', 'Professional Machines', '⚙️', 4, true)
ON CONFLICT (id) DO NOTHING;

-- Insert Shoe Cleaning Services
INSERT INTO menu_items (name, description, base_price, category, popular, image_url) VALUES
  
  -- Shoe Cleaning Services
  ('Standard Clean', 'Professional cleaning of uppers, midsole, and sole. Perfect for regular maintenance and light dirt removal.', 349.00, 'shoe-cleaning', true, 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Deep Clean', 'Comprehensive cleaning including uppers, midsole, sole, laces, insole, and deodorizing treatment for thorough restoration.', 449.00, 'shoe-cleaning', true, 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Signature Clean', 'Premium cleaning service with uppers, midsole, sole, insole, midsole whitening, laces, deodorizing, and disinfecting treatment.', 599.00, 'shoe-cleaning', true, 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),

  -- Reglue Services
  ('Minor Separations Repair', 'Professional repair for minor sole separations and small gaps. Quick turnaround with high-quality adhesive.', 799.00, 'reglue-services', false, 'https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Full Single Sole Reglue', 'Complete regluing of single sole separation. Includes preparation, cleaning, and professional bonding.', 1299.00, 'reglue-services', false, 'https://images.pexels.com/photos/1598509/pexels-photo-1598509.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Full Multiple Sole Reglue', 'Comprehensive regluing service for multiple sole layers. Professional restoration for complex sole structures.', 1899.00, 'reglue-services', false, 'https://images.pexels.com/photos/1598510/pexels-photo-1598510.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),

  -- Cleaning Products
  ('100ml Shoe Cleaning Solution Regular', 'Professional-grade shoe cleaning solution. Gentle yet effective formula for all shoe materials.', 89.99, 'cleaning-products', false, 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('150ml Shoe Cleaning Solution Regular', 'Larger size of our professional shoe cleaning solution. Great value for frequent use.', 119.99, 'cleaning-products', false, 'https://images.pexels.com/photos/1598512/pexels-photo-1598512.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('100ml On The Go Foamer Solution', 'Convenient foaming solution for quick touch-ups. Easy to use and travel-friendly.', 139.99, 'cleaning-products', false, 'https://images.pexels.com/photos/1598513/pexels-photo-1598513.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('100ml On The Go Foamer Kit', 'Complete foamer kit including solution and applicator. Everything you need for on-the-go cleaning.', 159.99, 'cleaning-products', false, 'https://images.pexels.com/photos/1598514/pexels-photo-1598514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('100ml On The Go Foamer Refill', 'Refill bottle for the On The Go Foamer. Eco-friendly option for regular users.', 79.99, 'cleaning-products', false, 'https://images.pexels.com/photos/1598515/pexels-photo-1598515.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('100ml Shoe Cleaning Solution Pro', 'Professional-grade cleaning solution with advanced formula. For the most demanding cleaning tasks.', 129.99, 'cleaning-products', false, 'https://images.pexels.com/photos/1598516/pexels-photo-1598516.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('150ml Shoe Cleaning Solution Pro', 'Larger size of our professional-grade cleaning solution. Premium quality in a bigger bottle.', 149.99, 'cleaning-products', false, 'https://images.pexels.com/photos/1598517/pexels-photo-1598517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('100ml Deo-disinfectant (Vanilla Cinnamon)', 'Pleasant vanilla cinnamon scented deodorizing and disinfecting solution. Keeps shoes fresh and hygienic.', 109.99, 'cleaning-products', false, 'https://images.pexels.com/photos/1598518/pexels-photo-1598518.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('100ml Deo-disinfectant (Clean Cotton)', 'Fresh clean cotton scented deodorizing and disinfecting solution. Neutral scent for all preferences.', 99.99, 'cleaning-products', false, 'https://images.pexels.com/photos/1598519/pexels-photo-1598519.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('On The Go Foamer Sponge', 'High-quality sponge designed for the On The Go Foamer system. Durable and effective for cleaning.', 35.00, 'cleaning-products', false, 'https://images.pexels.com/photos/1598520/pexels-photo-1598520.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('100ml Sole Whitening Solution', 'Specialized solution for whitening and brightening shoe soles. Professional results for white and light-colored soles.', 99.99, 'cleaning-products', false, 'https://images.pexels.com/photos/1598521/pexels-photo-1598521.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),

  -- Professional Machines
  ('HyperClean Pro Washer', 'Professional-grade shoe washing machine. Advanced cleaning technology for commercial use.', 89999.00, 'machines', false, 'https://images.pexels.com/photos/1598522/pexels-photo-1598522.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('HyperClean Pro Ozone Dryer', 'State-of-the-art ozone drying system. Eliminates odors and bacteria while drying shoes safely.', 79999.00, 'machines', false, 'https://images.pexels.com/photos/1598523/pexels-photo-1598523.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('HyperClean Pro Washer Plus', 'Complete professional solution including washer and dryer. All-in-one system for maximum efficiency.', 129999.00, 'machines', false, 'https://images.pexels.com/photos/1598524/pexels-photo-1598524.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('10L HyperClean Shoe Cleaning Solution', 'Bulk professional cleaning solution. Perfect for high-volume operations and cost-effective cleaning.', 4999.00, 'machines', false, 'https://images.pexels.com/photos/1598525/pexels-photo-1598525.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('5L HyperClean Shoe Cleaning Solution', 'Medium bulk professional cleaning solution. Great for moderate volume operations.', 3499.00, 'machines', false, 'https://images.pexels.com/photos/1598526/pexels-photo-1598526.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop');

-- Update site settings for Krylic branding
UPDATE site_settings SET 
  value = 'Krylic Consumer Goods Trading',
  description = 'The name of the shoe care business'
WHERE id = 'site_name';

UPDATE site_settings SET 
  value = 'Professional shoe cleaning, restoration, and care services. Ad Majorem Dei Gloriam.',
  description = 'Short description of the shoe care business'
WHERE id = 'site_description';

UPDATE site_settings SET 
  value = 'PHP',
  description = 'Currency symbol for prices'
WHERE id = 'currency';

UPDATE site_settings SET 
  value = 'PHP',
  description = 'Currency code for payments'
WHERE id = 'currency_code';

-- Insert Krylic-specific site settings
INSERT INTO site_settings (id, value, type, description) VALUES
  ('business_tagline', 'Ad Majorem Dei Gloriam', 'text', 'The business motto'),
  ('service_area', 'Metro Manila', 'text', 'Primary service area'),
  ('contact_phone', '+63 917 123 4567', 'text', 'Primary contact number'),
  ('contact_email', 'info@krylic.ph', 'text', 'Primary contact email'),
  ('business_hours', 'Monday-Saturday: 8AM-8PM', 'text', 'Business operating hours'),
  ('delivery_available', 'true', 'boolean', 'Whether delivery service is available'),
  ('pickup_available', 'true', 'boolean', 'Whether pickup service is available')
ON CONFLICT (id) DO NOTHING;

/*
  # Add Krylic Advanced Shoe Services - Paint, Restoration & Customization

  1. New Categories
    - Add paint-restoration, reglue-repair, sneaker-customization categories

  2. New Menu Items (Advanced Services)
    - Paint & Restoration Services: Touch-up and color restoration
    - Reglue & Repair Services: Advanced repair options with pricing tiers
    - Sneaker Customization Services: Professional customization services

  3. Features
    - Auto-generated UUIDs for all items
    - Detailed descriptions with service specifications
    - Professional pricing with "+" indicating starting prices
    - High-quality shoe customization and repair images
    - Proper categorization for service-based business
*/

-- First, add the new categories for advanced Krylic shoe services
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('paint-restoration', 'Paint & Restoration', '🎨', 5, true),
  ('sneaker-customization', 'Sneaker Customization', '✨', 7, true)
ON CONFLICT (id) DO NOTHING;

-- Insert Paint & Restoration Services
INSERT INTO menu_items (name, description, base_price, category, popular, image_url) VALUES
  
  -- Paint & Restoration Services
  ('Paint Touch-Up', 'Professional paint touch-up service for minor scuffs, scratches, and color fading. Perfect for restoring the original appearance of your shoes.', 999.00, 'paint-restoration', true, 'https://images.pexels.com/photos/1598527/pexels-photo-1598527.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Color Restoration', 'Complete color restoration service for faded or discolored shoes. Advanced techniques to bring back vibrant, original colors.', 999.00, 'paint-restoration', true, 'https://images.pexels.com/photos/1598528/pexels-photo-1598528.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),

  -- Advanced Reglue & Repair Services (added to existing reglue-services category)
  ('Full Outsoles', 'Complete outsole replacement service. Professional installation of new outsoles for maximum durability and performance.', 1499.00, 'reglue-services', false, 'https://images.pexels.com/photos/1598530/pexels-photo-1598530.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Full Midsoles', 'Comprehensive midsole replacement service. Restore cushioning and support with professional-grade materials.', 1999.00, 'reglue-services', false, 'https://images.pexels.com/photos/1598531/pexels-photo-1598531.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Sole Replacement', 'Premium sole replacement service with high-quality materials. Perfect for luxury and performance footwear restoration.', 4999.00, 'reglue-services', false, 'https://images.pexels.com/photos/1598533/pexels-photo-1598533.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Midsole Stitching', 'Professional midsole stitching repair service. Restore structural integrity with reinforced stitching techniques.', 999.00, 'reglue-services', false, 'https://images.pexels.com/photos/1598534/pexels-photo-1598534.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Stitch Repair', 'Expert stitch repair service for damaged seams and loose threads. Precise hand-stitching to match original craftsmanship.', 999.00, 'reglue-services', false, 'https://images.pexels.com/photos/1598535/pexels-photo-1598535.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),

  -- Sneaker Customization Services
  ('Custom Text', 'Personalized text customization service. Add names, quotes, or any text to your sneakers with professional precision.', 999.00, 'sneaker-customization', true, 'https://images.pexels.com/photos/1598536/pexels-photo-1598536.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Custom Logos', 'Professional logo customization service. Create or recreate logos with detailed attention to accuracy and quality.', 1999.00, 'sneaker-customization', true, 'https://images.pexels.com/photos/1598537/pexels-photo-1598537.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Custom Themed Colorway', 'Complete colorway transformation service. Professional color schemes and themes to match your vision.', 4999.00, 'sneaker-customization', false, 'https://images.pexels.com/photos/1598538/pexels-photo-1598538.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Custom Patterned / Themed with Details', 'Advanced customization with intricate patterns and detailed themes. Complex designs with professional execution.', 4999.00, 'sneaker-customization', false, 'https://images.pexels.com/photos/1598539/pexels-photo-1598539.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Custom Freestyle Themes', 'Creative freestyle customization service. Unique artistic themes and creative expressions on your sneakers.', 4999.00, 'sneaker-customization', false, 'https://images.pexels.com/photos/1598540/pexels-photo-1598540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'),
  
  ('Custom Drawing & Characters', 'Premium artistic customization with detailed drawings and character designs. Master-level artistic work on footwear.', 7999.00, 'sneaker-customization', false, 'https://images.pexels.com/photos/1598541/pexels-photo-1598541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop');

-- Update existing categories sort order to accommodate new ones
UPDATE categories SET sort_order = 1 WHERE id = 'shoe-cleaning';
UPDATE categories SET sort_order = 2 WHERE id = 'reglue-services';
UPDATE categories SET sort_order = 3 WHERE id = 'cleaning-products';
UPDATE categories SET sort_order = 4 WHERE id = 'machines';
UPDATE categories SET sort_order = 6 WHERE id = 'paint-restoration';

-- Add service-specific site settings
INSERT INTO site_settings (id, value, type, description) VALUES
  ('customization_note', 'Base pair not included - Bring your own sneakers for customization services', 'text', 'Note for customization services'),
  ('pricing_note', 'Prices shown are starting prices - Final cost depends on complexity and materials', 'text', 'Pricing information note'),
  ('service_duration', 'Services typically take 3-7 business days depending on complexity', 'text', 'Service turnaround time'),
  ('consultation_available', 'true', 'boolean', 'Whether free consultation is available for custom services'),
  ('pickup_delivery', 'true', 'boolean', 'Whether pickup and delivery is available for services')
ON CONFLICT (id) DO NOTHING;

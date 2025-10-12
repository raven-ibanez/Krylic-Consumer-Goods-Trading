-- Update site_logo to use local logo.jpg file instead of external Pexels image

UPDATE site_settings 
SET value = '/logo.jpg', 
    updated_at = now()
WHERE id = 'site_logo';

export const getOgImage = async (url: string): Promise<string | null> => {
  try {
    // For local development, we'll use a CORS proxy
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    const data = await response.json();
    
    if (data.contents) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.contents, 'text/html');
      
      // Try to get Open Graph image first
      const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content');
      if (ogImage) return ogImage;
      
      // Fallback to Twitter card image
      const twitterImage = doc.querySelector('meta[name="twitter:image"]')?.getAttribute('content');
      if (twitterImage) return twitterImage;
      
      // Fallback to first large image on the page
      const images = Array.from(doc.querySelectorAll('img'));
      const largeImage = images.find(img => {
        const width = parseInt(img.width?.toString() || '0');
        const height = parseInt(img.height?.toString() || '0');
        return width > 200 && height > 200;
      });
      
      if (largeImage) {
        // Convert relative URLs to absolute
        return new URL(largeImage.src, url).toString();
      }
    }
  } catch (error) {
    console.error('Error fetching OG image:', error);
  }
  
  return null;
};

import React, { useState, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Inline SVG placeholder
  const placeholderSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width || 800} ${height || 400}'%3E%3Crect width='100%25' height='100%25' fill='%231f2937'/%3E%3C/svg%3E`;

  useEffect(() => {
    if (!src) {
      setError(true);
      return;
    }

    const image = new Image();
    let isMounted = true;

    const loadImage = () => {
      image.src = src;
      
      image.onload = () => {
        if (isMounted) {
          setImageSrc(src);
          setIsLoading(false);
        }
      };

      image.onerror = () => {
        if (isMounted) {
          setError(true);
          setIsLoading(false);
        }
      };
    };

    // Add a small delay to prevent jank during initial render
    const timer = setTimeout(loadImage, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      image.onload = null;
      image.onerror = null;
    };
  }, [src]);

  return (
    <img
      {...props}
      src={isLoading || error ? placeholderSvg : imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'} ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
};

export default LazyImage;

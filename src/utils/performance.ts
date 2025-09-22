/**
 * Performance monitoring utilities
 */

// Simple performance monitoring for development
export const initPerformanceMonitoring = (): void => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      // Log performance metrics to console in development
      if (process.env.NODE_ENV === 'development') {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            console.log(`[Perf] ${entry.name}: ${entry.startTime.toFixed(2)}ms`);
          });
        });

        observer.observe({ entryTypes: ['paint', 'measure', 'resource'] });
      }
    } catch (error) {
      console.error('Performance monitoring error:', error);
    }
  }
};

/**
 * Track web vitals
 */
// Type for web-vitals metric
type Metric = {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  entries: PerformanceEntry[];
};

type WebVitals = {
  onCLS: (callback: (metric: Metric) => void) => void;
  onFID: (callback: (metric: Metric) => void) => void;
  onFCP: (callback: (metric: Metric) => void) => void;
  onLCP: (callback: (metric: Metric) => void) => void;
  onTTFB: (callback: (metric: Metric) => void) => void;
};

export const reportWebVitals = (onPerfEntry?: (metric: Metric) => void): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then((webVitals) => {
      // Use type assertion to access the web-vitals API
      const vitals = webVitals as unknown as WebVitals;
      
      // Register callbacks for each metric
      vitals.onCLS(onPerfEntry);
      vitals.onFID(onPerfEntry);
      vitals.onFCP(onPerfEntry);
      vitals.onLCP(onPerfEntry);
      vitals.onTTFB(onPerfEntry);
    }).catch(console.error);
  }
};

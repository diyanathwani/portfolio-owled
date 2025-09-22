/**
 * Performance monitoring utilities
 */

import { type ComponentType, type FC } from 'react';

// Type for any function
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;

// Web Vitals metric type
type WebVitalsMetric = {
  name: string;
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
};

// Web Vitals report handler type
type ReportHandler = (metric: WebVitalsMetric) => void;

/**
 * Initialize performance monitoring
 */
export const initPerformanceMonitoring = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

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
};

/**
 * Track component render time
 */
export function withPerf<P extends object>(
  Component: ComponentType<P>,
  componentName: string = 'Unknown'
): FC<P> {
  // In production, return the component as-is
  if (process.env.NODE_ENV === 'production') {
    return Component as FC<P>;
  }

  // In development, wrap with performance measurement
  const WrappedComponent: FC<P> = (props) => {
    const start = performance.now();
    const result = <Component {...props} />;
    const end = performance.now();
    
    console.log(`[Perf] ${componentName} rendered in ${(end - start).toFixed(2)}ms`);
    
    return result;
  };

  WrappedComponent.displayName = `withPerf(${componentName})`;
  return WrappedComponent;
}

/**
 * Track function execution time
 */
export function measure<T extends AnyFunction>(
  fn: T,
  name: string = fn.name || 'anonymous'
): (...args: Parameters<T>) => ReturnType<T> {
  // In production, return the function as-is
  if (process.env.NODE_ENV === 'production') {
    return fn;
  }

  // In development, wrap with performance measurement
  return function(this: unknown, ...args: Parameters<T>): ReturnType<T> {
    const start = performance.now();
    const result = fn.apply(this, args);
    const end = performance.now();
    
    console.log(`[Perf] ${name} executed in ${(end - start).toFixed(2)}ms`);
    
    return result;
  };
}

/**
 * Track web vitals
 */
export const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Use dynamic import with error handling
    import('web-vitals').then((webVitals) => {
      // Check for web-vitals v3+ API
      if ('onCLS' in webVitals) {
        (webVitals as any).onCLS(onPerfEntry);
        (webVitals as any).onFID(onPerfEntry);
        (webVitals as any).onFCP(onPerfEntry);
        (webVitals as any).onLCP(onPerfEntry);
        (webVitals as any).onTTFB(onPerfEntry);
      }
    }).catch((error) => {
      console.error('Error loading web-vitals:', error);
    });
  }
};

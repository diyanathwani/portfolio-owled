import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { initPerformanceMonitoring, reportWebVitals } from './utils/performance';
import App from './App';
import './index.css';

// Initialize performance monitoring in development
initPerformanceMonitoring();

// Get the root element
const container = document.getElementById('root');

if (!container) {
  throw new Error('Failed to find the root element');
}

// Create a root
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Web Vitals reporting (optional)
reportWebVitals((metric) => {
  // You can replace this with your analytics service
  console.log('[Web Vitals]', metric);
});

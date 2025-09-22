import React from 'react';

const LazyBackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-radial"></div>
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-conic rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial rounded-full blur-3xl animate-pulse delay-1000"></div>
    </>
  );
};

export default LazyBackgroundEffects;

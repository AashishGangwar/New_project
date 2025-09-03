import { useState, useEffect } from 'react';

const Animation = ({ url, width = 500, height = 400 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setHasError(true);
      }
    }, 5000); // 5 second timeout

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (!url) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
        <p className="text-red-500">No animation URL provided</p>
      </div>
    );
  }

  return (
    <div 
      className="animation-container relative bg-white rounded-xl shadow-lg overflow-hidden"
      style={{ 
        width: '100%',
        maxWidth: width,
        height,
        minHeight: '300px',
        margin: '0 auto',
        border: '1px solid rgba(0,0,0,0.1)',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
    >
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center p-6">
            <div className="w-12 h-12 border-4 border-[#FF8A3D] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading interactive content...</p>
          </div>
        </div>
      )}
      
      {hasError ? (
        <div className="h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-gray-50 to-gray-100">
          <svg className="w-12 h-12 text-red-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Couldn't load content</h3>
          <p className="text-gray-600 max-w-sm">We're having trouble loading this interactive element. Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-[#FF8A3D] text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        <iframe
          src={url}
          width="100%"
          height="100%"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
          title="Interactive Animation"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Animation;

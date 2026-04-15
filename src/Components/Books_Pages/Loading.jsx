// components/Loading.js
import React from 'react';

export default function Loading() {   
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        <p className="mt-4 text-amber-800">Loading sacred text...</p>
      </div>
    </div>
  );
};


import React from 'react';

const FloatingReservationButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-pink-100 p-4 shadow-lg z-50">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeaxqMeVpJyl_3kHV0rhT2OO6bndmwpx0zCfv8RRsH2FZhUvg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
        <button className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600 transition-colors">
          今すぐ予約する
        </button>
      </a>
    </div>
  );
};

export default FloatingReservationButton;
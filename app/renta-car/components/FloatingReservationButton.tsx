import React from 'react';

const FloatingReservationButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-pink-100 p-4 shadow-lg z-50">
      <button className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600 transition-colors">
        今すぐ予約する
      </button>
    </div>
  );
};

export default FloatingReservationButton;
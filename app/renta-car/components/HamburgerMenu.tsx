import React from 'react'
import Link from 'next/link'

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="bg-white w-64 h-full p-4">
        <button onClick={onClose} className="mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul>
          {['ホーム', 'レンタカーの特徴', 'ご利用案内', '車種と料金', 'アクセス'].map((item) => (
            <li key={item} className="mb-2">
              <Link href="#" className="block px-2 py-1 text-pink-500 hover:bg-pink-100 rounded">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p className="text-sm mb-2">ご予約はメールまたはお電話にて承ります</p>
          <p className="text-sm">Tel : 000-0000-0000<br />受付時間 : 8:00-20:00</p>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu
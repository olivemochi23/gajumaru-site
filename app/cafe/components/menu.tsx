import React, { useState } from 'react';
import Image from 'next/image';
import Section from '../../components/section';
import { MdClose } from 'react-icons/md';

export default function Menu() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setEnlargedImage(src);
  };

  const handleCloseClick = () => {
    setEnlargedImage(null);
  };

  return (
    <Section
      title="メニュー"
      subTitle="地元の食材を使用したメニュー"
      className="text-pink-800"
    >
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-pink-50 p-6 rounded-2xl">
          <h3 className="font-bold mb-4 text-xl text-pink-700">ドリンク</h3>
          <div className="cursor-pointer" onClick={() => handleImageClick("/ドリンクメニュー .jpg")}>
            <Image
              src="/ドリンクメニュー .jpg"
              alt="ドリンクメニュー"
              width={500}
              height={700}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="bg-pink-50 p-6 rounded-2xl">
          <h3 className="font-bold mb-4 text-xl text-pink-700">フード</h3>
          <div className="cursor-pointer" onClick={() => handleImageClick("/フードメニュー.jpg")}>
            <Image
              src="/フードメニュー.jpg"
              alt="フードメニュー"
              width={500}
              height={700}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {enlargedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={enlargedImage}
              alt="拡大されたメニュー"
              width={1000}
              height={1400}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={handleCloseClick}
              className="absolute top-4 right-4 text-white bg-pink-500 rounded-full p-2 hover:bg-pink-600 transition-colors"
            >
              <MdClose size={24} />
            </button>
          </div>
        </div>
      )}
    </Section>
  );
}
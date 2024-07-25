import React from 'react';
import Section from '../../components/section';

const ArticlesOfIncorporationPage = () => {
  return (
    <Section
      title="定款"
      subTitle="ガジュマルレンタカーの定款"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-md my-8 mx-4">
        <h3 className="text-xl font-bold text-pink-600 mb-3">第1章 総則</h3>
        <p className="mb-4">
          第1条（商号）<br />
          当会社は、株式会社ガジュマルレンタカーと称し、英文ではGajumaru Rent-a-Car Co., Ltd.と表示する。
        </p>
        <p className="mb-4">
          第2条（目的）<br />
          当会社は、次の事業を営むことを目的とする。<br />
          1. 自動車の賃貸業<br />
          2. 前号に付帯する一切の業務
        </p>
        <p className="mb-4">
          第3条（本店の所在地）<br />
          当会社は、本店を香川県小豆郡小豆島町に置く。
        </p>
        {/* 他の条項も同様に追加 */}
      </div>
    </Section>
  );
};

export default ArticlesOfIncorporationPage;
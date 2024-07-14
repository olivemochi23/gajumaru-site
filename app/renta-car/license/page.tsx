import React from 'react';
import Section from '../../components/section';

const LicensePage = () => {
  return (
    <Section
      title="運転免許証について"
      subTitle="レンタカーをお貸しできる運転免許証の種類"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-md my-8 mx-4">
        <h3 className="text-xl font-bold text-pink-600 mb-3">レンタカーをお貸しできる運転免許証は以下の通りです。</h3>
        <ul className="space-y-4">
          <li>
            <h4 className="font-bold">運転免許証</h4>
            <p>国内各公安委員会発行の運転免許証</p>
            <p className="text-sm text-gray-600">※ アルミバン2tロング、冷凍車2tは中型免許が必要です。（普通免許では運転できません）ただし、平成19年6月1日以前に普通免許を取得され、免許証の種類に「中型」、条件欄に「中型車は中型車(8t)に限る」の記載がある方は運転可能です。</p>
          </li>
          <li>
            <h4 className="font-bold">国際運転免許証</h4>
            <p>ジュネーブ条約（1949）加盟国93か国+2行政区域（日本を除く）発行の国際運転免許証</p>
            <p className="text-sm text-gray-600">※パスポートの同時提示が必要です</p>
          </li>
          <li>
            <h4 className="font-bold">外国運転免許証</h4>
            <p>対象国および地域（スイス連邦、ドイツ連邦共和国、フランス共和国、イタリア共和国、ベルギー王国の5か国と台湾）発行の外国運転免許証</p>
            <p className="text-sm text-gray-600">※免許証の日本語翻訳文、およびパスポートの同時提示が必要です。日本語の翻訳文は、本人申請に基づき各国の在日大使館、領事館、またはJAF（日本自動車連盟）が発行した翻訳文が必要です。</p>
          </li>
        </ul>
        <div className="mt-4">
          <h4 className="font-bold">注意事項</h4>
          <p className="text-sm text-gray-600">
            国際運転免許証または外国運転免許証により運転できる期間は、日本に上陸した日から1年間または当該免許証の有効期間のいずれか短い期間です。
            （ただし、住民基本台帳に記録されている方が出国の確認または再入国の許可等を受けて日本から出国し、3か月未満のうちに帰国した場合においては、当該帰国（上陸）の日は国際免許証等による運転可能期間の起算日とはなりません）
          </p>
          <p className="text-sm text-gray-600 mt-2">
            具体的には、日本に1年以上経過している住民基本台帳に記録されている方、または外国人登録を受けている方は、継続して3か月以上日本を出国し、国際運転免許証を取得して再入国したような場合には、再入国が運転可能期間の起算日となります。出国から再入国までの期間が3か月に満たない場合は、再入国の運転可能期間の起算日とはならず、有効な国際運転免許証を所持していても運転することはできず、運転した場合には無免許運転として処罰されることとなります。
          </p>
          <p className="text-sm text-gray-600 mt-2">
            詳しくは、<a href="https://www.keishicho.metro.tokyo.lg.jp/menkyo/menkyo/kokugai/kokugai05.html" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">外国の運転免許をお持ちの方（警視庁Webサイト）</a>をご確認ください。
          </p>
        </div>
      </div>
    </Section>
  );
};

export default LicensePage;
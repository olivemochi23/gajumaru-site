import React from 'react';
import Section from '../components/section';

const PrivacyPolicyPage = () => {
  return (
    <Section
      title="プライバシーポリシー"
      subTitle="お客様の個人情報保護に関する方針"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-md my-8 mx-4">
        <h3 className="text-xl font-bold text-pink-600 mb-3">個人情報保護について</h3>
        <p className="mb-4">
          個人情報保護の重要性を認識し、適切に利用し、保護することが社会的責任であると考え、個人情報の保護に努めることをお約束いたします。
        </p>

        <h4 className="font-bold text-lg mb-2 text-pink-600">個人情報の定義</h4>
        <p className="mb-4">
          個人情報とは、個人に関する情報であり、氏名、生年月日、性別、電話番号、電子メールアドレス、職業、勤務先等、特定の個人を識別し得る情報をいいます。
        </p>

        <h4 className="font-bold text-lg mb-2 text-pink-600">個人情報の収集・利用</h4>
        <p className="mb-4">
          当社は、以下の目的のため、その範囲内においてのみ、個人情報を収集・利用いたします。当社による個人情報の収集・利用は、お客様の自発的な提供によるものであり、お客様が個人情報を提供された場合は、当社が本方針に則って個人情報を利用することをお客様が許諾したものとします。
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>お客様に有益かつ必要と思われる情報の提供</li>
          <li>業務遂行上で必要となる当社からの問い合わせ、確認、およびサービス向上のための意見収集</li>
          <li>各種のお問い合わせ対応</li>
        </ul>

        <h4 className="font-bold text-lg mb-2 text-pink-600">個人情報の第三者提供</h4>
        <p className="mb-4">
          当社は、法令に基づく場合等正当な理由によらない限り、事前に本人の同意を得ることなく、個人情報を第三者に開示・提供することはありません。
        </p>

        <h3 className="text-xl font-bold text-pink-600 mt-8 mb-3">免責補償</h3>
<h4 className="font-bold text-lg mb-2 text-pink-600">免責補償制度未加入時の事故</h4>
<div className="overflow-x-auto">
  <table className="w-full mb-4 border-collapse">
    <thead>
      <tr className="bg-pink-100">
        <th className="border border-pink-300 px-4 py-2 text-left">補償内容</th>
        <th className="border border-pink-300 px-4 py-2 text-center">自走不可能な場合</th>
        <th className="border border-pink-300 px-4 py-2 text-center">自走して予定の営業店に返還された場合</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">対物補償(免責額)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">最大50,000円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">最大50,000円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">車両補償(免責額)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">最大50,000円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">最大50,000円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">休業補償(NOC)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">50,000円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">20,000円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">レッカー代</td>
        <td className="border border-pink-300 px-4 py-2 text-center">実費</td>
        <td className="border border-pink-300 px-4 py-2 text-center">なし</td>
      </tr>
      <tr className="hover:bg-pink-50 font-bold">
        <td className="border border-pink-300 px-4 py-2">お客様ご負担合計</td>
        <td className="border border-pink-300 px-4 py-2 text-center">最大150,000円+レッカー代</td>
        <td className="border border-pink-300 px-4 py-2 text-center">最大120,000円</td>
      </tr>
    </tbody>
  </table>
</div>

<h4 className="font-bold text-lg mb-2 text-pink-600">（スタンダード）免責補償制度加入時、車対車の事故</h4>
<p className="mb-2">※相手が特定できない場合は自損事故となります</p>
<div className="overflow-x-auto">
  <table className="w-full mb-4 border-collapse">
    <thead>
      <tr className="bg-pink-100">
        <th className="border border-pink-300 px-4 py-2 text-left">補償内容</th>
        <th className="border border-pink-300 px-4 py-2 text-center">自走不可能な場合</th>
        <th className="border border-pink-300 px-4 py-2 text-center">自走して予定の営業店に返還された場合</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">対物補償(免責額)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">車両補償(免責額)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">休業補償(NOC)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">50,000円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">20,000円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">レッカー代</td>
        <td className="border border-pink-300 px-4 py-2 text-center">実費</td>
        <td className="border border-pink-300 px-4 py-2 text-center">なし</td>
      </tr>
      <tr className="hover:bg-pink-50 font-bold">
        <td className="border border-pink-300 px-4 py-2">お客様ご負担合計</td>
        <td className="border border-pink-300 px-4 py-2 text-center">50,000円+レッカー代</td>
        <td className="border border-pink-300 px-4 py-2 text-center">20,000円</td>
      </tr>
    </tbody>
  </table>
</div>

<h4 className="font-bold text-lg mb-2 text-pink-600">（スタンダード）免責補償制度加入時、自損事故 ※単独事故、キズ・ヘコミ・破損含む</h4>
<div className="overflow-x-auto">
  <table className="w-full mb-4 border-collapse">
    <thead>
      <tr className="bg-pink-100">
        <th className="border border-pink-300 px-4 py-2 text-left">補償内容</th>
        <th className="border border-pink-300 px-4 py-2 text-center">自走不可能な場合</th>
        <th className="border border-pink-300 px-4 py-2 text-center">自走して予定の営業店に返還された場合</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">対物補償(免責額)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">車両補償(免責額)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">最大50,000円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">最大50,000円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">休業補償(ノンオペレーションチャージ・NOC)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">50,000円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">20,000円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">レッカー代(現地作業代を含む)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">実費</td>
        <td className="border border-pink-300 px-4 py-2 text-center">なし</td>
      </tr>
      <tr className="hover:bg-pink-50 font-bold">
        <td className="border border-pink-300 px-4 py-2">お客様ご負担合計</td>
        <td className="border border-pink-300 px-4 py-2 text-center">最大100,000円+レッカー代</td>
        <td className="border border-pink-300 px-4 py-2 text-center">最大70,000円</td>
      </tr>
    </tbody>
  </table>
</div>

<h4 className="font-bold text-lg mb-2 text-pink-600">スタンダード 免責補償制度の加入料</h4>
<p className="mb-4">1日24時間 1,100円でご加入いただけます。</p>

<h4 className="font-bold text-lg mb-2 text-pink-600">（フルカバー）免責補償制度加入時、車対車の事故</h4>
<p className="mb-2">※相手が特定できない場合は自損事故となります</p>
<div className="overflow-x-auto">
  <table className="w-full mb-4 border-collapse">
    <thead>
      <tr className="bg-pink-100">
        <th className="border border-pink-300 px-4 py-2 text-left">補償内容</th>
        <th className="border border-pink-300 px-4 py-2 text-center">自走不可能な場合</th>
        <th className="border border-pink-300 px-4 py-2 text-center">自走して予定の営業店に返還された場合</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">対物補償(免責額)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">車両補償(免責額)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">休業補償(NOC)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">レッカー代</td>
        <td className="border border-pink-300 px-4 py-2 text-center">実費</td>
        <td className="border border-pink-300 px-4 py-2 text-center">なし</td>
      </tr>
      <tr className="hover:bg-pink-50 font-bold">
        <td className="border border-pink-300 px-4 py-2">お客様ご負担合計</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
      </tr>
    </tbody>
  </table>
</div>

<h4 className="font-bold text-lg mb-2 text-pink-600">（フルカバー）免責補償制度加入時、自損事故 ※単独事故、キズ・ヘコミ・破損含む</h4>
<div className="overflow-x-auto">
  <table className="w-full mb-4 border-collapse">
    <thead>
      <tr className="bg-pink-100">
        <th className="border border-pink-300 px-4 py-2 text-left">補償内容</th>
        <th className="border border-pink-300 px-4 py-2 text-center">自走不可能な場合</th>
        <th className="border border-pink-300 px-4 py-2 text-center">自走して予定の営業店に返還された場合</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">対物補償(免責額)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">車両補償(免責額)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">休業補償(ノンオペレーションチャージ・NOC)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
      </tr>
      <tr className="hover:bg-pink-50">
        <td className="border border-pink-300 px-4 py-2">レッカー代(現地作業代を含む)</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
      </tr>
      <tr className="hover:bg-pink-50 font-bold">
        <td className="border border-pink-300 px-4 py-2">お客様ご負担合計</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
        <td className="border border-pink-300 px-4 py-2 text-center">0円</td>
      </tr>
    </tbody>
  </table>
</div>

        <h4 className="font-bold text-lg mb-2 text-pink-600">フルカバー 免責補償制度の加入料</h4>
        <p className="mb-4">1日24時間 2,200円でご加入いただけます。</p>

        <h4 className="font-bold text-lg mb-2 text-pink-600">自損事故とは</h4>
        <p className="mb-4">
          車両対車両の事故ではない事故を、「自損事故」といいます。車両対車両の事故でも、相手車両が特定できない場合は、「自損事故」とみなします。
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>電柱やガードレールなどに衝突。</li>
          <li>車の転落、転覆。</li>
          <li>接触や追突されたが相手に逃げられた(当て逃げ)</li>
          <li>車上荒らしによってガラスやドアなどが破損した。</li>
        </ul>

        <h4 className="font-bold text-lg mb-2 text-pink-600">その他お客様のご負担が発生するケース</h4>
        <ul className="list-disc list-inside mb-4">
          <li>雪道や砂浜で埋まってレッカーを要請した場合</li>
          <li>カギ紛失の場合 など</li>
        </ul>

        <h4 className="font-bold text-lg mb-2 text-pink-600">保険補償制度が適用できないケース</h4>
        <p className="mb-4">以下の場合、保険補償制度が適用されない損害、またお客様のご負担となります。</p>
        <ul className="list-disc list-inside mb-4">
          <li>事故時に警察および当社への連絡など所定の手続きがなかった場合</li>
          <li>貸渡約款に違反している場合</li>
          <li>迷惑(違法)駐車に起因した損害</li>
          <li>飲酒および酒気帯び運転</li>
          <li>薬物使用</li>
          <li>無断延長</li>
          <li>契約書記載の運転者および副運転者以外の運転</li>
          <li>又貸し</li>
          <li>無免許運転(運転免許停止期間や運転できる自動車の種類に違反している場合も含む)</li>
          <li>無断で示談した場合</li>
          <li>各種テスト</li>
          <li>競技に使用し、または他車のけん引</li>
          <li>後押しに使用した場合</li>
          <li>その他貸渡約款に定める免責事項に該当する事故など</li>
        </ul>

        <h3 className="text-xl font-bold text-pink-600 mt-8 mb-3">ご利用時の注意事項</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <h4 className="font-bold inline">貸渡証・約款・車検証</h4>
            <p>警察官または陸運支局の職員などから提示を求められることがありますので、貸渡し期間中は必ず本証をご携帯ください。</p>
          </li>
          <li>
            <h4 className="font-bold inline">チャイルドシートの装着確認</h4>
            <p>6歳未満のお子様が乗車される場合は、チャイルドシートの使用が運転者に義務付けられています。ご出発前に必ず装着確認をお願いいたします。装着不具合により生じた事故などについては責任を負いかねます。</p>
          </li>
          <li>
            <h4 className="font-bold inline">カーナビ利用について</h4>
            <p>カーナビ使用により設定されるルートはあくまでも参考ルートとしてお使いください。所定時間の相違などによる損害については責任を負いかねます。</p>
          </li>
          <li>
            <h4 className="font-bold inline">シートベルト着用について</h4>
            <p>助手席はもちろん、後部座席にも乗車する方がいるときは、シートベルトを着用してください。</p>
          </li>
          <li>
            <h4 className="font-bold inline">車両管理について</h4>
            <p>貸渡し期間中の保管場所の確保、日常点検整備などを含む車両の管理者はお客様となります。</p>
          </li>
          <li>
            <h4 className="font-bold inline">その他</h4>
            <p>ペットの同乗はご遠慮ください。乗用車による引っ越しなどの荷物運搬利用はご遠慮ください。</p>
          </li>
        </ul>

        <h3 className="text-xl font-bold text-pink-600 mt-8 mb-3">ご返却時の注意事項</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <h4 className="font-bold inline">ご返却時間について</h4>
            <p>ご返却時間や場所の変更、返却時間に間に合わない場合など、事前にスタッフへご連絡ください。営業時間外のご出発、ご帰着はお受けできません。</p>
            <ul className="list-disc list-inside ml-4">
              <li>オプションのご契約がある場合は、ご契約に準じたお時間が対象になります。</li>
              <li>ご返却時間超過の場合は所定の延長料金がかかります。また、その他諸費用を追加でいただく場合がございます。</li>
              <li>お車の予約状況によっては延長出来ない場合があります。</li>
            </ul>
          </li>
          <li>
            <h4 className="font-bold inline">ゴミは必ずお持ち帰りください。</h4>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default PrivacyPolicyPage;
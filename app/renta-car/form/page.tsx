'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Section from '../components/section';

export default function ReservationForm() {
  const [name, setName] = useState('');
  const [furigana, setFurigana] = useState('');
  const [email, setEmail] = useState('');
  const [carModel, setCarModel] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rentalTime, setRentalTime] = useState('');
  const [pickupLocation, setPickupLocation] = useState('池田港');
  const [returnLocation, setReturnLocation] = useState('池田港');
  const [options, setOptions] = useState<string[]>([]);
  const [driverAge, setDriverAge] = useState('');
  const [licenseType, setLicenseType] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          furigana,
          email,
          carModel,
          startDate,
          endDate,
          rentalTime,
          pickupLocation,
          returnLocation,
          options,
          driverAge,
          licenseType,
          specialRequests
        }),
      });
      if (response.ok) {
        alert('予約リクエストを送信しました。確認メールをご確認ください。');
        router.push('/thank-you');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('エラーが発生しました。もう一度お試しください。');
    }
  };

  return (
    <Section
      title="車両予約フォーム"
      subTitle="ご希望の車両とオプションをお選びください"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <div className="bg-white p-6 rounded-xl shadow-md my-8 mx-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              お名前（フリガナ） *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            <input
              type="text"
              id="furigana"
              value={furigana}
              onChange={(e) => setFurigana(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              placeholder="フリガナ"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              メールアドレス *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div>
            <label htmlFor="carModel" className="block text-gray-700 text-sm font-bold mb-2">
              希望の車種 *
            </label>
            <select
              id="carModel"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">選択してください</option>
              <option value="BMW miniコンバーチブル">BMW miniコンバーチブル</option>
              <option value="軽自動車">軽自動車</option>
              <option value="コンパクトタイプ">コンパクトタイプ</option>
            </select>
          </div>

          <div>
            <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">
              出発日 *
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block text-gray-700 text-sm font-bold mb-2">
              返却日 *
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div>
            <label htmlFor="rentalTime" className="block text-gray-700 text-sm font-bold mb-2">
              レンタル開始と返却のお時間をご記入ください
            </label>
            <input
              type="text"
              id="rentalTime"
              value={rentalTime}
              onChange={(e) => setRentalTime(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="例：10時～18時"
            />
          </div>

          <div>
            <label htmlFor="pickupLocation" className="block text-gray-700 text-sm font-bold mb-2">
              出発場所 *
            </label>
            <select
              id="pickupLocation"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="池田港">池田港</option>
              <option value="その他">その他</option>
            </select>
          </div>

          <div>
            <label htmlFor="returnLocation" className="block text-gray-700 text-sm font-bold mb-2">
              返却場所 *
            </label>
            <select
              id="returnLocation"
              value={returnLocation}
              onChange={(e) => setReturnLocation(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="池田港">池田港</option>
              <option value="その他">その他</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              オプション *
            </label>
            {['チャイルドシート／ジュニアシート', '免責補償制度（スタンダード）', '免責補償制度（フルカバー）', 'オプションなし'].map((option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={option}
                  value={option}
                  checked={options.includes(option)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setOptions([...options, e.target.value]);
                    } else {
                      setOptions(options.filter(opt => opt !== e.target.value));
                    }
                  }}
                  className="form-checkbox h-5 w-5 text-pink-600"
                />
                <label htmlFor={option} className="ml-2 text-gray-700">{option}</label>
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="driverAge" className="block text-gray-700 text-sm font-bold mb-2">
              運転者の年齢 *
            </label>
            <select
              id="driverAge"
              value={driverAge}
              onChange={(e) => setDriverAge(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">選択してください</option>
              <option value="21歳未満">21歳未満</option>
              <option value="免許取得１年未満">免許取得１年未満</option>
              <option value="その他">その他</option>
            </select>
          </div>

          <div>
            <label htmlFor="licenseType" className="block text-gray-700 text-sm font-bold mb-2">
              運転免許証の種類 *
            </label>
            <select
              id="licenseType"
              value={licenseType}
              onChange={(e) => setLicenseType(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">選択してください</option>
              <option value="日本の運転免許証">日本の運転免許証</option>
              <option value="国際運転免許証">国際運転免許証</option>
              <option value="外国運転免許証（対象国のみ）">外国運転免許証（対象国のみ）</option>
            </select>
          </div>

          <div>
            <label htmlFor="specialRequests" className="block text-gray-700 text-sm font-bold mb-2">
              特記事項・ご要望
            </label>
            <textarea
              id="specialRequests"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              予約リクエスト送信
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
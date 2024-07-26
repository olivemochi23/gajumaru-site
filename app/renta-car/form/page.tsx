'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Section from '../../components/section';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const FormPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    email: '',
    tel: '',
    inquiryType: '',
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    returnLocation: '',
    carTypes: [],
    remarks: '',
    pickupLocationOther: '',
    returnLocationOther: '',
    options: [],
    driverAge: '',
    licenseType: '',
    specialRequests: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      carTypes: checked
        ? [...prev.carTypes, name]
        : prev.carTypes.filter(type => type !== name)
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        router.push('/renta-car/thank-you');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Section
      title="レンタカー予約フォーム"
      subTitle="以下のフォームに必要事項をご記入ください"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4 mx-4">
        
      <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700">お問い合わせ内容</label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleInputChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
            required
          >
            <option value="">選択してください</option>
            <option value="予約">予約</option>
            <option value="問い合わせ">問い合わせ</option>
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>

        <div>
          <label htmlFor="furigana" className="block text-sm font-medium text-gray-700">フリガナ</label>
          <Input type="text" id="furigana" name="furigana" value={formData.furigana} onChange={handleInputChange} required />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>

        <div>
          <label htmlFor="tel" className="block text-sm font-medium text-gray-700">電話番号</label>
          <Input type="tel" id="tel" name="tel" value={formData.tel} onChange={handleInputChange} required />
        </div>

        <div>
          <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">貸出日時</label>
          <Input type="datetime-local" id="pickupDate" name="pickupDate" value={formData.pickupDate} onChange={handleInputChange} required />
        </div>

        <div>
          <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">返却日時</label>
          <Input type="datetime-local" id="returnDate" name="returnDate" value={formData.returnDate} onChange={handleInputChange} required />
        </div>

        <div>
          <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">出発場所</label>
          <select
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleInputChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
            required
          >
            <option value="">選択してください</option>
            <option value="池田港">池田港</option>
            <option value="その他">その他</option>
          </select>
          {formData.pickupLocation === 'その他' && (
            <Input
              type="text"
              name="pickupLocationOther"
              value={formData.pickupLocationOther || ''}
              onChange={handleInputChange}
              placeholder="その他の出発場所を入力"
              className="mt-2"
            />
          )}
        </div>

        <div>
          <label htmlFor="returnLocation" className="block text-sm font-medium text-gray-700">返却場所</label>
          <select
            id="returnLocation"
            name="returnLocation"
            value={formData.returnLocation}
            onChange={handleInputChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
            required
          >
            <option value="">選択してください</option>
            <option value="池田港">池田港</option>
            <option value="その他">その他</option>
          </select>
          {formData.returnLocation === 'その他' && (
            <Input
              type="text"
              name="returnLocationOther"
              value={formData.returnLocationOther || ''}
              onChange={handleInputChange}
              placeholder="その他の返却場所を入力"
              className="mt-2"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">オプション（詳しくは<a href="/renta-car/privacy-policy" className="text-pink-600 hover:text-pink-800">こちら</a>）</label>
          <div className="mt-2 space-y-2">
            {['チャイルドシート／ジュニアシート', '免責補償制度（スタンダード）', '免責補償制度（フルカバー）', 'オプションなし'].map((option) => (
              <div key={option} className="flex items-center">
                <Checkbox
                  id={option}
                  name="options"
                  checked={formData.options?.includes(option)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFormData(prev => ({ ...prev, options: [...(prev.options || []), option] }));
                    } else {
                      setFormData(prev => ({ ...prev, options: prev.options?.filter(item => item !== option) }));
                    }
                  }}
                />
                <label htmlFor={option} className="ml-2 text-sm text-gray-700">{option}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="driverAge" className="block text-sm font-medium text-gray-700">運転者の年齢</label>
          <select
            id="driverAge"
            name="driverAge"
            value={formData.driverAge}
            onChange={handleInputChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
            required
          >
            <option value="">選択してください</option>
            <option value="21歳未満">21歳未満</option>
            <option value="免許取得１年未満">免許取得１年未満</option>
          </select>
        </div>

        <div>
          <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700">運転免許証の種類</label>
          <select
            id="licenseType"
            name="licenseType"
            value={formData.licenseType}
            onChange={handleInputChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
            required
          >
            <option value="">選択してください</option>
            <option value="日本の運転免許証">日本の運転免許証</option>
            <option value="国際運転免許証">国際運転免許証</option>
            <option value="外国運転免許証（対象国のみ）">外国運転免許証（対象国のみ）</option>
          </select>
        </div>

        <div>
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">特記事項・ご要望</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            rows={4}
            value={formData.specialRequests}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          ></textarea>
        </div>

        <Button type="submit" className="w-full">送信</Button>
      </form>
    </Section>
  );
};

export default FormPage;
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
    remarks: ''
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
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
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
          <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">貸出日時</label>
          <Input type="datetime-local" id="pickupDate" name="pickupDate" value={formData.pickupDate} onChange={handleInputChange} required />
        </div>

        <div>
          <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">返却日時</label>
          <Input type="datetime-local" id="returnDate" name="returnDate" value={formData.returnDate} onChange={handleInputChange} required />
        </div>

        <div>
          <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">貸出場所</label>
          <Input type="text" id="pickupLocation" name="pickupLocation" value={formData.pickupLocation} onChange={handleInputChange} required />
        </div>

        <div>
          <label htmlFor="returnLocation" className="block text-sm font-medium text-gray-700">返却場所</label>
          <Input type="text" id="returnLocation" name="returnLocation" value={formData.returnLocation} onChange={handleInputChange} required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">希望車種</label>
          <div className="mt-2 space-y-2">
            {['mini-convertible', 'kei', 'compact'].map((carType) => (
              <div key={carType} className="flex items-center">
                <Checkbox
                  id={carType}
                  name={carType}
                  checked={formData.carTypes.includes(carType)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFormData(prev => ({ ...prev, carTypes: [...prev.carTypes, carType] }));
                    } else {
                      setFormData(prev => ({ ...prev, carTypes: prev.carTypes.filter(type => type !== carType) }));
                    }
                  }}
                />
                <label htmlFor={carType} className="ml-2 text-sm text-gray-700">
                  {carType === 'mini-convertible' ? 'BMW Mini コンバーチブル' :
                   carType === 'kei' ? '軽自動車' :
                   carType === 'compact' ? 'コンパクトタイプ' : ''}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">備考</label>
          <textarea
            id="remarks"
            name="remarks"
            rows={4}
            value={formData.remarks}
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
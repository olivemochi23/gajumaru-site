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
    carType: '',
    inquiryType: '',
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    returnLocation: '',
    remarks: '',
    pickupLocationOther: '',
    returnLocationOther: '',
    options: [],
    driverAge: '',
    licenseType: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
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

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const requiredFields = ['name', 'email', 'tel', 'inquiryType', 'pickupDate', 'returnDate', 'pickupLocation', 'returnLocation'];
    let hasError = false;
  
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = `${field}を入力してください`;
        hasError = true;
      }
    });
  
    if (formData.tel && !/^\d{10,11}$/.test(formData.tel)) {
      newErrors.tel = '電話番号は10桁または11桁の数字で入力してください';
      hasError = true;
    }
  
    setErrors(newErrors);
    return !hasError;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
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

  const isError = Object.keys(errors).length > 0;

  return (
    <Section
      title="レンタカー予約フォーム"
      subTitle="以下のフォームに必要事項をご記入ください"
      className="bg-pink-200 rounded-3xl my-8 mx-4"
    >
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4 mx-4">
  
  <div>
    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700">お問い合わせ内容 <span className="text-red-500">*</span></label>
    <select
      id="inquiryType"
      name="inquiryType"
      value={formData.inquiryType}
      onChange={handleInputChange}
      className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md ${isError ? 'border-red-500' : ''}`}
      required
    >
      <option value="">選択してください</option>
      <option value="予約">予約</option>
      <option value="問い合わせ">問い合わせ</option>
    </select>
    {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>}
  </div>

  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前（フリガナ） <span className="text-red-500">*</span></label>
    <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className={isError ? 'border-red-500' : ''} />
    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス <span className="text-red-500">*</span></label>
    <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className={isError ? 'border-red-500' : ''} />
    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
  </div>

  <div>
    <label htmlFor="tel" className="block text-sm font-medium text-gray-700">電話番号 <span className="text-red-500">*</span></label>
    <Input type="tel" id="tel" name="tel" value={formData.tel} onChange={handleInputChange} required className={isError ? 'border-red-500' : ''} />
    {errors.tel && <p className="text-red-500 text-sm mt-1">{errors.tel}</p>}
  </div>

  <div>
  <label htmlFor="carType" className="block text-sm font-medium text-gray-700">車種のご希望 <span className="text-red-500">*</span></label>
  <select
    id="carType"
    name="carType"
    value={formData.carType}
    onChange={handleInputChange}
    className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md ${isError ? 'border-red-500' : ''}`}
    required
  >
    <option value="">選択してください</option>
    <option value="軽自動車">軽自動車（4人）</option>
    <option value="コンパクト">コンパクト（5人）</option>
    <option value="MINIオープン">MINIオープン（4人）</option>
  </select>
  {errors.carType && <p className="text-red-500 text-sm mt-1">{errors.carType}</p>}
</div>

  <div>
    <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">貸出日時 <span className="text-red-500">*</span></label>
    <Input type="datetime-local" id="pickupDate" name="pickupDate" value={formData.pickupDate} onChange={handleInputChange} required className={isError ? 'border-red-500' : ''} />
    {errors.pickupDate && <p className="text-red-500 text-sm mt-1">{errors.pickupDate}</p>}
  </div>

  <div>
    <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">返却日時 <span className="text-red-500">*</span></label>
    <Input type="datetime-local" id="returnDate" name="returnDate" value={formData.returnDate} onChange={handleInputChange} required className={isError ? 'border-red-500' : ''} />
    {errors.returnDate && <p className="text-red-500 text-sm mt-1">{errors.returnDate}</p>}
  </div>

  <div>
    <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">出発場所 <span className="text-red-500">*</span></label>
    <select
      id="pickupLocation"
      name="pickupLocation"
      value={formData.pickupLocation}
      onChange={handleInputChange}
      className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md ${isError ? 'border-red-500' : ''}`}
      required
    >
      <option value="">選択してください</option>
      <option value="池田港">池田港</option>
      <option value="その他">その他</option>
    </select>
    {errors.pickupLocation && <p className="text-red-500 text-sm mt-1">{errors.pickupLocation}</p>}
    {formData.pickupLocation === 'その他' && (
      <Input
        type="text"
        name="pickupLocationOther"
        value={formData.pickupLocationOther || ''}
        onChange={handleInputChange}
        placeholder="その他の出発場所を入力"
        className={`mt-2 ${isError ? 'border-red-500' : ''}`}
      />
    )}
  </div>

  <div>
    <label htmlFor="returnLocation" className="block text-sm font-medium text-gray-700">返却場所 <span className="text-red-500">*</span></label>
    <select
      id="returnLocation"
      name="returnLocation"
      value={formData.returnLocation}
      onChange={handleInputChange}
      className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md ${isError ? 'border-red-500' : ''}`}
      required
    >
      <option value="">選択してください</option>
      <option value="池田港">池田港</option>
      <option value="その他">その他</option>
    </select>
    {errors.returnLocation && <p className="text-red-500 text-sm mt-1">{errors.returnLocation}</p>}
    {formData.returnLocation === 'その他' && (
      <Input
        type="text"
        name="returnLocationOther"
        value={formData.returnLocationOther || ''}
        onChange={handleInputChange}
        placeholder="その他の返却場所を入力"
        className={`mt-2 ${isError ? 'border-red-500' : ''}`}
      />
    )}
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700">オプション（詳しくは<a href="/renta-car/privacy-policy" className="text-pink-600 hover:text-pink-800">こちら</a>） </label>
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
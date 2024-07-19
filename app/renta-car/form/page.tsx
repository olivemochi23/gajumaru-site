'use client'

import React, { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const FormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setIsSubmitted(true);

      } else {
        // エラー処理
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">ご予約・お問い合わせフォーム</h1>
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">お名前*</Label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="furigana">フリガナ*</Label>
          <Input id="furigana" name="furigana" required />
        </div>
        <div>
          <Label htmlFor="email">メールアドレス*</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="confirmEmail">メールアドレス（確認用）*</Label>
          <Input id="confirmEmail" name="confirmEmail" type="email" required />
        </div>
        <div>
          <Label>お問い合わせ内容*</Label>
          <RadioGroup name="inquiryType" defaultValue="reservation">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="reservation" id="reservation" />
              <Label htmlFor="reservation">ご予約</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="inquiry" id="inquiry" />
              <Label htmlFor="inquiry">お問い合わせ</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label htmlFor="pickupDate">貸出日時*</Label>
          <Input id="pickupDate" name="pickupDate" type="datetime-local" required />
        </div>
        <div>
          <Label htmlFor="returnDate">返却日時*</Label>
          <Input id="returnDate" name="returnDate" type="datetime-local" required />
        </div>
        <div>
          <Label htmlFor="pickupLocation">貸出場所*</Label>
          <Select name="pickupLocation">
            <SelectTrigger>
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="store">店舗</SelectItem>
              <SelectItem value="port">港</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="returnLocation">返却場所*</Label>
          <Select name="returnLocation">
            <SelectTrigger>
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="store">店舗</SelectItem>
              <SelectItem value="port">港</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>希望車種（複数選択可）*</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="mini" name="carTypes" value="mini" />
              <Label htmlFor="mini">BMW Mini コンバーチブル</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="kei" name="carTypes" value="kei" />
              <Label htmlFor="kei">軽自動車</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="compact" name="carTypes" value="compact" />
              <Label htmlFor="compact">コンパクトタイプ</Label>
            </div>
          </div>
        </div>
        <div>
          <Label htmlFor="remarks">備考</Label>
          <Textarea id="remarks" name="remarks" />
        </div>
        <div>
          <Button type="submit" className="bg-pink-500 text-white w-full">送信</Button>
        </div>
      </form>
  
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">送信完了</h2>
            <p>お問い合わせありがとうございます。内容を確認の上、担当者より折り返しご連絡させていただきます。</p>
            <Button onClick={() => setIsSubmitted(false)} className="mt-4 bg-pink-500 text-white w-full">閉じる</Button>
          </div>
        </div>
      )}

    </div>
  );
};

export default FormPage;
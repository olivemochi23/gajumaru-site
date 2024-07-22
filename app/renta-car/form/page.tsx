'use client'

import React, { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

const FormPage = () => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    const email = formData.get('email');
    const confirmEmail = formData.get('confirmEmail');
  
    if (email !== confirmEmail) {
      alert('メールアドレスが一致しません。');
      return;
    }
  
    // carTypes を配列として取得
    const carTypes: string[] = [];
    Array.from(formData.entries()).forEach(([key, value]) => {
      if (key === 'carTypes' && value) {
        carTypes.push(value as string);
      }
    });
  
    try {
      console.log('フォームデータ送信開始');
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify({ ...Object.fromEntries(formData), carTypes }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      console.log('レスポンスステータス:', response.status);
      const responseData = await response.json();
      console.log('レスポンスデータ:', responseData);
    
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          router.push('/thank-you');
        }, 3000);
      } else {
        console.error('Failed to send email:', responseData);
        alert(`メールの送信に失敗しました。エラー: ${responseData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`エラーが発生しました。${error.message}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">ご予約・お問い合わせフォーム</h1>
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">お名前</Label>
          <Input type="text" id="name" name="name" required />
        </div>

        <div>
          <Label htmlFor="furigana">フリガナ</Label>
          <Input type="text" id="furigana" name="furigana" required />
        </div>

        <div>
          <Label htmlFor="email">メールアドレス</Label>
          <Input type="email" id="email" name="email" required />
        </div>

        <div>
          <Label htmlFor="confirmEmail">メールアドレス（確認用）</Label>
          <Input type="email" id="confirmEmail" name="confirmEmail" required />
        </div>

        <div>
          <Label htmlFor="tel">電話番号</Label>
          <Input type="tel" id="tel" name="tel" required />
        </div>

        <div>
          <Label>お問い合わせ内容</Label>
          <RadioGroup defaultValue="reservation" name="inquiryType">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="reservation" id="reservation" />
              <Label htmlFor="reservation">予約</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="inquiry" id="inquiry" />
              <Label htmlFor="inquiry">お問い合わせ</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="pickupDate">貸出日時</Label>
          <Input type="datetime-local" id="pickupDate" name="pickupDate" required />
        </div>

        <div>
          <Label htmlFor="returnDate">返却日時</Label>
          <Input type="datetime-local" id="returnDate" name="returnDate" required />
        </div>

        <div>
          <Label htmlFor="pickupLocation">貸出場所</Label>
          <Select name="pickupLocation">
            <SelectTrigger>
              <SelectValue placeholder="貸出場所を選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="shop">店舗</SelectItem>
              <SelectItem value="tonosho">土庄港</SelectItem>
              <SelectItem value="ikeda">池田港</SelectItem>
              <SelectItem value="kusakabe">草壁港</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="returnLocation">返却場所</Label>
          <Select name="returnLocation">
            <SelectTrigger>
              <SelectValue placeholder="返却場所を選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="shop">店舗</SelectItem>
              <SelectItem value="tonosho">土庄港</SelectItem>
              <SelectItem value="ikeda">池田港</SelectItem>
              <SelectItem value="kusakabe">草壁港</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>希望車種（複数選択可）</Label>
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

        <Button type="submit" className="bg-pink-500 text-white">送信</Button>
      </form>

      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p>送信が完了しました。</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormPage;
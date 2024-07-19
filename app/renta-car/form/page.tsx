import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const FormPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">ご予約・お問い合わせフォーム</h1>
      
      <div className="bg-pink-100 p-4 rounded-lg mb-6">
        <p className="font-bold mb-2">注意</p>
        <p>こちらのご予約・お問い合わせフォームはあくまで空き状況のお問い合わせです。ご予約は完了しませんのでご注意ください。レンタルできる車がある場合はご予約完了メールを返信いたします。</p>
      </div>

      <p className="mb-6">ご予約のご希望・お問い合わせは、お電話(0879-62-9685)にてお問い合わせいただくか、下記のメールフォームよりご連絡ください。</p>

      <form className="space-y-6">
        <div>
          <Label htmlFor="name">お名前*</Label>
          <Input id="name" required />
        </div>

        <div>
          <Label htmlFor="furigana">フリガナ*</Label>
          <Input id="furigana" required />
        </div>

        <div>
          <Label htmlFor="email">メールアドレス*</Label>
          <Input id="email" type="email" required />
        </div>

        <div>
          <Label htmlFor="email-confirm">メールアドレス（確認用）*</Label>
          <Input id="email-confirm" type="email" required />
          <p className="text-sm text-gray-500 mt-1">※確認のため同じメールアドレスを入力してください。</p>
        </div>

        <div>
          <Label htmlFor="tel">TEL*</Label>
          <Input id="tel" type="tel" required />
        </div>

        <div>
          <Label>お問い合わせ内容*</Label>
          <RadioGroup defaultValue="reservation">
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
          <Label htmlFor="pickup-date">ご希望の貸出日時*</Label>
          <Input id="pickup-date" type="datetime-local" required />
        </div>

        <div>
          <Label htmlFor="return-date">ご希望の返却日時*</Label>
          <Input id="return-date" type="datetime-local" required />
        </div>

        <div>
          <Label htmlFor="pickup-location">ご希望の貸出場所*</Label>
          <Select>
            <SelectTrigger id="pickup-location">
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="store">店舗</SelectItem>
              <SelectItem value="port">港</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="return-location">ご希望の返却場所*</Label>
          <Select>
            <SelectTrigger id="return-location">
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="store">店舗</SelectItem>
              <SelectItem value="port">港</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>ご希望の車種*</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="mini-convertible" />
              <Label htmlFor="mini-convertible">BMW Mini コンバーチブル(5人乗り)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="kei" />
              <Label htmlFor="kei">軽自動車(4人乗り)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="compact" />
              <Label htmlFor="compact">コンパクトタイプ(5人乗り)</Label>
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="remarks">備考</Label>
          <Textarea id="remarks" />
        </div>

        <div>
          <Button type="submit" className="bg-pink-500 text-white">確認</Button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
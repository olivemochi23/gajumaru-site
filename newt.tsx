import 'server-only'
import { createClient } from 'newt-client-js'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export interface NewtImage {
    src: string;
    altText?: string;
    width?: number;
    height?: number;
  }
  
  export interface CarList {
    id: string;
    name: string;
    price: Price;
    image?: {
      src: string;
    };
  }
  
  export interface Price {
    // Priceの適切な型定義を追加
    value: number;
    currency: string;
  }
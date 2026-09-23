import type { Product } from "../types/product"
import appleByzImg from '@/shared/assets/productAssets/AppleBYZ.svg'
import appleEarPods from '@/shared/assets/productAssets/appleEarPods.svg'
import appleEarPods2 from '@/shared/assets/productAssets/appleEarPods2.svg'
import appleAirPods from '@/shared/assets/productAssets/AppleAirPods.svg'
import gerlaxGH04 from '@/shared/assets/productAssets/gerlaxGH04.svg'
import borofoneB04 from '@/shared/assets/productAssets/borofoneB04.svg'

export const headphones: Product[] = [
  {
    id: '1',
    img: appleByzImg,
    title: 'Apple BYZ S852I',
    price: 2927,
    oldPrice: 3527,
    rate: 4.7,
    description: 'Проводные наушники с чистым звуком и удобной посадкой для повседневного использования.',
  },
  {
    id: '2',
    img: appleEarPods,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    description: 'Классические проводные наушники с разъёмом Lightning и сбалансированным звучанием.',
  },
  {
    id: '3',
    img: appleEarPods2,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    description: 'Классические проводные наушники с разъёмом Lightning и сбалансированным звучанием.',
  },
  {
    id: '4',
    img: appleByzImg,
    title: 'Apple BYZ S852I',
    price: 2927,
    rate: 4.7,
    description: 'Проводные наушники с чистым звуком и удобной посадкой для повседневного использования.',
  },
  {
    id: '5',
    img: appleEarPods,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    description: 'Классические проводные наушники с разъёмом Lightning и сбалансированным звучанием.',
  },
  {
    id: '6',
    img: appleEarPods2,
    title: 'Apple EarPods',
    price: 2327,
    rate: 4.5,
    description: 'Классические проводные наушники с разъёмом Lightning и сбалансированным звучанием.',
  },
]

export const wirelessHeadphones: Product[] = [
  {
    id: '4',
    img: appleAirPods,
    title: 'Apple AirPods',
    price: 9527,
    rate: 4.7,
    description: 'Беспроводные наушники с быстрым подключением и автономностью на весь день.',
  },
  {
    id: '5',
    img: gerlaxGH04,
    title: 'GERLAX GH-04',
    price: 6527,
    rate: 4.7,
    description: 'Компактные беспроводные наушники с чехлом-кейсом для зарядки и удобной посадкой.',
  },
  {
    id: '6',
    img: borofoneB04,
    title: 'BOROFONE BO4',
    price: 7527,
    rate: 4.7,
    description: 'Беспроводные наушники с понятным управлением и стабильным Bluetooth-соединением.',
  },
]
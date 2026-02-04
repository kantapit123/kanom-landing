export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  price: number;
  priceUnit: string;
  category: ProductCategory;
  tags: string[];
  image?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export type ProductCategory = 'ขนมไทย' | 'เบเกอรี่เบาๆ' | 'ของว่างประชุม';

export const categories: { id: ProductCategory; label: string; labelEn: string }[] = [
  { id: 'ขนมไทย', label: 'ขนมไทย', labelEn: 'Thai Desserts' },
  { id: 'เบเกอรี่เบาๆ', label: 'เบเกอรี่เบาๆ', labelEn: 'Light Bakery' },
  { id: 'ของว่างประชุม', label: 'ของว่างประชุม', labelEn: 'Meeting Snacks' },
];

export const products: Product[] = [
  {
    id: 'thong-yip',
    name: 'ทองหยิบ',
    nameEn: 'Thong Yip',
    description: 'ขนมมงคลรูปดอกไม้สีทองสดใส หวานละมุนจากไข่แดงแท้',
    price: 25,
    priceUnit: 'ชิ้น',
    category: 'ขนมไทย',
    tags: ['ขนมมงคล', 'ยอดนิยม'],
    isBestSeller: true,
  },
  {
    id: 'thong-yord',
    name: 'ทองหยอด',
    nameEn: 'Thong Yord',
    description: 'หยดทองอ่อนนุ่ม หอมหวานกลมกล่อม เคี้ยวเพลิน',
    price: 25,
    priceUnit: 'ชิ้น',
    category: 'ขนมไทย',
    tags: ['ขนมมงคล', 'ยอดนิยม'],
    isBestSeller: true,
  },
  {
    id: 'foi-thong',
    name: 'ฝอยทอง',
    nameEn: 'Foi Thong',
    description: 'เส้นทองละเอียดนุ่มละลายในปาก หวานพอดี',
    price: 120,
    priceUnit: 'กล่อง',
    category: 'ขนมไทย',
    tags: ['ขนมมงคล'],
    isBestSeller: true,
  },
  {
    id: 'khanom-chan',
    name: 'ขนมชั้น',
    nameEn: 'Khanom Chan',
    description: 'ขนมชั้นหอมใบเตย เนื้อนุ่มหนึบ สีสันสดใส',
    price: 35,
    priceUnit: 'ชิ้น',
    category: 'ขนมไทย',
    tags: ['ยอดนิยม', 'หอมใบเตย'],
    isBestSeller: true,
  },
  {
    id: 'luk-chup',
    name: 'ลูกชุบ',
    nameEn: 'Luk Chup',
    description: 'ลูกชุบผลไม้จิ๋วน่ารัก สีสันสดใส รสชาติหวานมัน',
    price: 15,
    priceUnit: 'ชิ้น',
    category: 'ขนมไทย',
    tags: ['น่ารัก', 'ถ่ายรูปสวย'],
    isNew: true,
  },
  {
    id: 'khanom-tom',
    name: 'ขนมต้ม',
    nameEn: 'Khanom Tom',
    description: 'ขนมต้มไส้มะพร้าว เคลือบมะพร้าวขูดหอมมัน',
    price: 20,
    priceUnit: 'ชิ้น',
    category: 'ขนมไทย',
    tags: ['หอมมะพร้าว'],
  },
  {
    id: 'butter-cookie',
    name: 'คุกกี้เนย',
    nameEn: 'Butter Cookie',
    description: 'คุกกี้เนยกรอบนอกนุ่มใน หอมเนยแท้ ละลายในปาก',
    price: 45,
    priceUnit: 'ถุง (5 ชิ้น)',
    category: 'เบเกอรี่เบาๆ',
    tags: ['กรอบอร่อย'],
    isBestSeller: true,
  },
  {
    id: 'brownie-bite',
    name: 'บราวนี่คำเดียว',
    nameEn: 'Brownie Bite',
    description: 'บราวนี่ชิ้นพอดีคำ หนึบนุ่ม ช็อกโกแลตเข้มข้น',
    price: 35,
    priceUnit: 'ชิ้น',
    category: 'เบเกอรี่เบาๆ',
    tags: ['ช็อกโกแลต', 'ยอดนิยม'],
    isBestSeller: true,
  },
  {
    id: 'pandan-cake',
    name: 'เค้กใบเตย',
    nameEn: 'Pandan Cake',
    description: 'เค้กใบเตยเนื้อนุ่มฟู หอมใบเตยธรรมชาติ',
    price: 40,
    priceUnit: 'ชิ้น',
    category: 'เบเกอรี่เบาๆ',
    tags: ['หอมใบเตย', 'นุ่มฟู'],
  },
  {
    id: 'mini-sandwich',
    name: 'แซนด์วิชมินิ',
    nameEn: 'Mini Sandwich',
    description: 'แซนด์วิชไส้ทูน่าหรือแฮมชีส ขนาดพอดีคำ',
    price: 35,
    priceUnit: 'ชิ้น',
    category: 'ของว่างประชุม',
    tags: ['คาว', 'พอดีคำ'],
  },
  {
    id: 'puff-pastry',
    name: 'พัฟไส้ต่างๆ',
    nameEn: 'Puff Pastry',
    description: 'พัฟกรอบไส้ไก่/หมูหยอง/ทูน่า หอมกรอบร้อนๆ',
    price: 30,
    priceUnit: 'ชิ้น',
    category: 'ของว่างประชุม',
    tags: ['คาว', 'กรอบร้อน'],
    isBestSeller: true,
  },
  {
    id: 'fruit-skewer',
    name: 'ผลไม้เสียบไม้',
    nameEn: 'Fruit Skewer',
    description: 'ผลไม้สดตามฤดูกาล เสียบไม้พอดีคำ สะดวกทาน',
    price: 25,
    priceUnit: 'ไม้',
    category: 'ของว่างประชุม',
    tags: ['สดใหม่', 'สุขภาพ'],
  },
];

export const bestSellers = products.filter(p => p.isBestSeller);
export const newProducts = products.filter(p => p.isNew);

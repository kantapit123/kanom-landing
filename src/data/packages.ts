export interface Package {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  pricePerPerson: number;
  minOrder: number;
  pieces: number;
  includes: string[];
  addOns: AddOn[];
  leadTime: string;
  isPopular?: boolean;
  isCustom?: boolean;
}

export interface AddOn {
  name: string;
  price: number;
  unit: string;
}

export const packages: Package[] = [
  {
    id: 'starter',
    name: 'ชุด Starter',
    nameEn: 'Starter Set',
    description: 'เหมาะสำหรับการประชุมสั้นๆ หรือ coffee break เบาๆ',
    pricePerPerson: 65,
    minOrder: 10,
    pieces: 2,
    includes: [
      'ขนมไทย 1 ชิ้น',
      'เบเกอรี่/ของว่าง 1 ชิ้น',
      'บรรจุกล่องสวยงาม',
    ],
    addOns: [
      { name: 'น้ำดื่ม', price: 10, unit: 'ขวด' },
      { name: 'น้ำผลไม้', price: 25, unit: 'ขวด' },
    ],
    leadTime: 'สั่งล่วงหน้า 2 วัน',
  },
  {
    id: 'standard',
    name: 'ชุด Standard',
    nameEn: 'Standard Set',
    description: 'ชุดยอดนิยม เหมาะกับการประชุมทั่วไปและสัมมนา',
    pricePerPerson: 95,
    minOrder: 10,
    pieces: 3,
    includes: [
      'ขนมไทย 1-2 ชิ้น',
      'เบเกอรี่ 1 ชิ้น',
      'ของว่างคาว 1 ชิ้น',
      'บรรจุกล่องพรีเมียม',
    ],
    addOns: [
      { name: 'น้ำดื่ม', price: 10, unit: 'ขวด' },
      { name: 'กาแฟร้อน/เย็น', price: 35, unit: 'แก้ว' },
      { name: 'ชาร้อน/เย็น', price: 30, unit: 'แก้ว' },
    ],
    leadTime: 'สั่งล่วงหน้า 2 วัน',
    isPopular: true,
  },
  {
    id: 'premium',
    name: 'ชุด Premium',
    nameEn: 'Premium Set',
    description: 'ชุดพิเศษครบครัน เหมาะกับงานสำคัญและ VIP',
    pricePerPerson: 145,
    minOrder: 10,
    pieces: 5,
    includes: [
      'ขนมไทยคัดพิเศษ 2 ชิ้น',
      'เบเกอรี่พรีเมียม 1 ชิ้น',
      'ของว่างคาว 1-2 ชิ้น',
      'ผลไม้สด',
      'บรรจุกล่องหรูหรา',
    ],
    addOns: [
      { name: 'กาแฟสด', price: 45, unit: 'แก้ว' },
      { name: 'ชาพรีเมียม', price: 40, unit: 'แก้ว' },
      { name: 'น้ำผลไม้สด', price: 35, unit: 'แก้ว' },
    ],
    leadTime: 'สั่งล่วงหน้า 3 วัน',
  },
  {
    id: 'custom',
    name: 'ชุด Custom',
    nameEn: 'Custom Set',
    description: 'ออกแบบเมนูเองตามความต้องการ เลือกได้ทุกรายการ',
    pricePerPerson: 0,
    minOrder: 15,
    pieces: 0,
    includes: [
      'เลือกขนมได้ตามใจชอบ',
      'กำหนดจำนวนชิ้นเอง',
      'เลือกแพ็กเกจจิ้งได้',
      'ปรึกษาเมนูฟรี',
    ],
    addOns: [],
    leadTime: 'สั่งล่วงหน้า 3-5 วัน',
    isCustom: true,
  },
];

export const popularPackage = packages.find(p => p.isPopular);

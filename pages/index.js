import ProductList from '../components/products/ProductList';

const DUMMY_PRODUCTS = [
  {
    id: 'laptop01',
    product_name: 'Notebook INTEL Alpha Force I BQC71ABBB6000 (Black)',
    price:'39,900',
    image:
      'https://img.advice.co.th/images_nas/pic_product4/A0128901/A0128901OK_ORI_1.jpg',
    description: 'หน้าจอแสดงผลขนาด 15.6" ระดับ FHD 144Hz ระบบประมวลผล Intel Core i7-9750 Processor ระบบประมวลผลกราฟิก NVIDIA GeForce RTX 2070 Max-Q Design',
  },
  {
    id: 'laptop02',
    product_name: 'Notebook Asus ROG Strix G15 GL542LI-HN053T (Black W/LightBar)',
    price:'26,900',
    image:
      'https://img.advice.co.th/images_nas/pic_product4/A0131621/A0131621OK_ORI_1.jpg',
    description: 'หน้าจอแสดงผลขนาด 15.6" ระดับ FHD IPS 144Hz หน่วยประมวลผล Intel Core i5-10300H Processor หน่วยประมวลผลกราฟิก NVIDIA GeForce GTX 1650 Ti Graphics',
  },
  {
    id: 'laptop03',
    product_name: 'Notebook MSI Stealth 15MA11UEK-084TH (Black)',
    price:'69,900',
    image:
      'https://img.advice.co.th/images_nas/pic_product4/A0135654/A0135654OK_ORI_1.jpg',
    description: '15.6" Full HD (1920x1080), 144Hz, IPS-level gaming display 11th Gen Intel® Core™ i7 processor NVIDIA GeForce RTX™ 3060 Max-Q Graphics',
  },
  {
    id: 'CPU01',
    product_name: 'CPU AMD AM4 RYZEN5 3500X (NEXT)',
    price:'5,470',
    image:
      'https://img.advice.co.th/images_nas/pic_product4/A0133187/A0133187OK_BIG_1.jpg',
    description: 'Socket : AM4 CORE : 6 THREADS : 6 Frequency : 3.6 GHz Turbo Frequency : 4.1 GHz',
  },
  {
    id: 'CPU02',
    product_name: 'CPU AMD AM4 RYZEN5 3600',
    price:'6,650',
    image:
      'https://img.advice.co.th/images_nas/pic_product4/A0126977/A0126977OK_BIG_1.jpg',
    description: 'Socket : AM4 CORE : 6 THREADS : 12 Frequency : 3.6 GHz Turbo Frequency : 4.2 GHz',
  },
  {
    id: 'CPU03',
    product_name: 'CPU AMD AM4 RYZEN5 Pro 4650G (NEXT)',
    price:'8,590',
    image:
      'https://img.advice.co.th/images_nas/pic_product4/A0135705/A0135705OK_BIG_1.jpg',
    description: 'Socket : AM4 CPU CORE : 6 THREADS : 12 Frequency : 3.7 GHz Turbo Frequency : 4.2 GHz',
  },
  {
    id: 'MONITOR01',
    product_name: "Monitor 21.5'' HP V22 FHD (TN, VGA, HDMI) 60Hz",
    price:'3,250',
    image:
      'https://img.advice.co.th/images_nas/pic_product4/A0135052/A0135052OK_BIG_1.jpg',
    description: 'รับสีที่เหมือนจริงและรายละเอียดที่คมชัดสำหรับทุกสิ่งบนหน้าจอ Full HD ขนาด 21.5 นิ้ว มีพอร์ตเชื่อมต่อให้คุณเลือกใช้ด้วยพอร์ต D-Sub(VGA) และ HDMI',
  },
  {
    id: 'MONITOR02',
    product_name: "Monitor 21.5'' LENOVO D22-20 (TN/ VGA/ HDMI) 75Hz",
    price:'3,240',
    image:
      'https://img.advice.co.th/images_nas/pic_product4/A0132459/A0132459OK_BIG_1.jpg',
    description: 'จอภาพ Full-HD ขนาด 21.5 นิ้วนี้มอบประสบการณ์การรับชมที่ราบรื่น ในราคาที่คุ้มค่า มีตัวเลือกการเชื่อมต่อผ่านพอร์ต VGA และ HDMI',
  },
  {
    id: 'MONITOR03',
    product_name: "Monitor 21.5'' ACER EK220QBbmiix (VA, HDMI, VGA) 75Hz",
    price:'3,360',
    image:
      'https://img.advice.co.th/images_nas/pic_product4/A0132337/A0132337OK_BIG_1.jpg',
    description: 'จอภาพ ACER EK220QBbmiix ขนาด 21.5 นิ้ว ความละเอียด Full HD (1920 x 1080) VA ให้มุมมองกว้างถึง 178 องศา มีพอร์ตเชื่อมต่อ VGA และ HDMI',
  },
  {
    id: 'CASE01',
    product_name: 'ATX Case (NP) AEROCOOL CS-1103 (Black)',
    price:'1,005',
    image:
      'https://img.advice.co.th/images_nas/pic_product4/A0125266/A0125266OK_BIG_1.jpg',
    description: 'MID TOWER CASE มาพร้อมกับแผงด้านหน้อะลูมิเนียมขัดเงาเพื่อมอบลุคระดับมืออาชีพ หรูหรา รองรับการระบายความร้อนด้วยอากาศที่ด้านหน้า, ด้านข้างและด้านหลังเคสเพื่อเพิ่มประสิทธิภาพการทำความเย็นและมาพร้อมกับพัดลมขนาด 80 มม. ที่ด้านหลัง',
  },
];

function HomePage() {
  return <ProductList products={DUMMY_PRODUCTS} />;
}

export default HomePage;

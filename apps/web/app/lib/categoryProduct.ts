export type Product = {
    id: number; // 제품 고유 번호
    name: string; // 제품 명
    description: string; // 제품 설명
    price: number; // 가격
    imageUrl: string; // 이미지 주소
    category: string[]; // 카테고리 
  };
  
  export const products: Product[] = [
    {
      id: 1,
      name: '1인용 침대 1',
      description: '1인용 침대 1',
      price: 299000,
      imageUrl: 'https://www.ikea.com/kr/ko/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1151043_pe884764_s5.jpg?f=xxs',
      category: ['bed-mattress', 'bed', 'single-bed'],
    },
    {
      id: 2,
      name: '1인용 침대 2',
      description: '1인용 침대 2',
      price: 249000,
      imageUrl: 'https://www.ikea.com/kr/ko/images/products/slattum-upholstered-bed-frame-vissle-dark-grey__1259334_pe926648_s5.jpg?f=xxs',
      category: ['bed-mattress', 'bed', 'single-bed'],
    },
    {
      id: 3,
      name: '1인용 침대 3',
      description: '1인용 침대 3',
      price: 269000,
      imageUrl: 'https://www.ikea.com/kr/ko/images/products/grimsbu-bed-frame-grey__0749251_pe747239_s5.jpg?f=xxs',
      category: ['bed-mattress', 'bed', 'single-bed'],
    },
    {
      id: 4,
      name: '더블 침대 1',
      description: '더블 침대 1',
      price: 229000,
      imageUrl: 'https://www.ikea.com/kr/ko/images/products/slattum-upholstered-bed-frame-vissle-dark-grey__1259335_pe926650_s5.jpg?f=xxs',
      category: ['bed-mattress', 'bed', 'double-bed'],
    },
    {
      id: 5,
      name: '더블 침대 2',
      description: '더블 침대 2',
      price: 99000,
      imageUrl: 'https://www.ikea.com/kr/ko/images/products/malm-ottoman-bed-white__0749127_pe745496_s5.jpg?f=xxs',
      category: ['bed-mattress', 'bed', 'double-bed'],
    },
    {
      id: 6,
      name: '침구 1',
      description: '침구 1',
      price: 199000,
      imageUrl: '/images/products/bedding1.jpg',
      category: ['bed-mattress', 'bedding'],
    },
    {
      id: 7,
      name: '침구 2',
      description: '침구 2',
      price: 119000,
      imageUrl: '/images/products/bedding2.jpg',
      category: ['bed-mattress', 'bedding'],
    },
    {
      id: 8,
      name: '매트리스 1',
      description: '매트리스 1',
      price: 189000,
      imageUrl: '/images/products/mattress1.jpg',
      category: ['bed-mattress', 'mattress'],
    },
    {
      id: 9,
      name: '매트리스 2',
      description: '매트리스 2',
      price: 219000,
      imageUrl: '/images/products/mattress2.jpg',
      category: ['bed-mattress', 'mattress'],
    },
    {
      id: 10,
      name: '소파 1',
      description: '소파 1',
      price: 209000,
      imageUrl: '/images/products/sofa-armchair1.jpg',
      category: ['sofa-armchair'],
    },
  ];
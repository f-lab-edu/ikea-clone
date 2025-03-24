export type Category = {
  name: string;        // URL 값
  label: string;       // 사용자 표출 값
  parent?: string;     // 부모 카테고리 이름
};

export const categories: Category[] = [
  // 대분류
  { name: 'new-p', label: '신제품' },
  { name: 'bed-mattress', label: '침대/매트리스' },
  { name: 'sofa-armchair', label: '소파/암체어' },

  // 중분류
  { name: 'bed', label: '침대', parent: 'bed-mattress' },
  { name: 'mattress', label: '매트리스', parent: 'bed-mattress' },
  { name: 'bedding', label: '침구', parent: 'bed-mattress' },

  // 소분류
  { name: 'single-bed', label: '1인용 침대', parent: 'bed' },
  { name: 'double-bed', label: '더블 침대', parent: 'bed' },
];
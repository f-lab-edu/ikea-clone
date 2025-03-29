export type Category = {
  name: string;        // URL 값
  label: string;       // 사용자 표출 값
  parent?: string;     // 부모 카테고리 이름
  title?: string;
  description?: string; // 제품 설명
};

export const categories: Category[] = [
  // 대분류
  { name: 'new-p', label: '신제품', title: 'test', description:'test' },
  { name: 'bed-mattress', label: '침대/매트리스', title: '공간의 품격을 더해주는, TONSTAD 톤스타드 시리즈', description:'자연이 선사한 아름다운 나뭇결과 디테일이 살아 있는 정교한 마감, 그리고 어떤 공간에도 조화롭게 녹아드는 클래식한 디자인까지! TONSTAD톤스타드 시리즈와 함께하는 실제 고객들의 일상이 담긴 사진과 생생한 사용 후기를 확인해보세요.' },
  { name: 'sofa-armchair', label: '소파/암체어', title: '빈티지 디자인의 새로운 해석, Nytillverkad 뉘틸베르카드 컬렉션', description:'2025년 2월, 이케아 Nytillverkad 뉘틸베르카드 여섯 번째 시리즈를 통해 생기 넘치는 색상과 새로운 소재로 재해석된 빈티지 디자인의 아이코닉 제품들을 만나보세요. 생동감 있는 오렌지 색상으로 돌아온 화제의 아이템, DYVLINGE 뒤블링에 회전암체어를 비롯한 다양한 제품들이 모두의 마음을 사로잡을 새로운 모습으로 찾아왔어요!' },

  // 중분류
  { name: 'bed', label: '침대', parent: 'bed-mattress', title: '부담 없는 예산으로 만드는 편안한 수면 공간', description:'KLEPPSTAD 클렙스타드 침대프레임은 모던한 디자인과 물세탁 가능한 패브릭 침대헤드의 아늑한 느낌이 특징이에요. 잠자는 시간이 기다려질 만큼 부드럽고 기분 좋은 공간을 만들어 주죠.' },
  { name: 'mattress', label: '매트리스', parent: 'bed-mattress', title: '매트리스 고르는 팁', description:'수면의 질을 책임지는 매트리스, 신중하게 골라야 하죠! IKEA가 가지고 있는 다양한 매트리스를 살펴보고 나에게 맞는 매트리스를 선택해 보세요.' },
  { name: 'bedding', label: '침구', parent: 'bed-mattress', title: '커버 교체와 쉬운 세탁으로 쾌적한 수면 환경을 만들어 보세요.', description:'이케아의 이불과 베개는 속과 커버가 분리되며 더 청결하게 관리할 수 있습니다. 피부에 직접 닿는 커버를 손쉽게 교체하여 더욱 상쾌한 수면 환경을 유지하세요.' },

  // 소분류
  { name: 'single-bed', label: '1인용 침대', parent: 'bed', title: '', description: '전통적인 스타일부터 모던한 디자인까지 IKEA에서는 저렴한 가격에 싱글 및 수퍼싱글+ 침대 프레임을 구매하실 수 있어요. IKEA만의 수퍼싱글+ 사이즈는 기성 수퍼싱글 사이즈보다 10cm가 더 커 더욱 여유럽고 편안한 수면 공감을 경험하게 해주죠. 공간을 더 잘 활용하고 싶다면 빌트인 수납이 있는 제품이나 밑에 박스를 넣을 수 있는 디자인을 골라보세요.  \n \n 침대프레임을 고르고 내 몸에 꼭 맞는 매트리스도 함께 구경해보세요!' },
  { name: 'double-bed', label: '더블 침대', parent: 'bed', title: '', description:'하루를 최상의 컨디션으로 시작하려면 숙면을 취해야 하죠. 다양한 스타일의 튼튼한 IKEA 침대는 최고의 편안함과 품질을 약속해드려요. 빌트인 수납처럼 스마트한 기능이 있거나 밑에 수납함을 밀어넣을 수 있는 크기의 침대도 많답니다. IKEA의 침대로 오랫동안 달콤한 꿈을 꾸는 숙면을 즐겨보세요. \n \n 침대프레임을 고르고 내 몸에 꼭 맞는 매트리스도 함께 구경해보세요!' },
];
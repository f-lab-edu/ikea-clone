'use client'
 
import { useParams } from 'next/navigation'
 
export default function CategoryPage() {
  const params = useParams<{ name: string }>()
 
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params)
 
  // 카테고리에 맞는 제품 목록 표시
  return (
    <div>
      <p>{params.name}</p>
    </div>
  );
}
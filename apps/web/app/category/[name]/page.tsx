'use client'
 
import { useParams } from 'next/navigation'
 
export default function CategoryPage() {
  const params = useParams<{ name: string }>()
 
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params)
 
  return (
    <div>
      <p>{params.name}</p>
    </div>
  );
}
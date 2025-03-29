'use client'
 
import { useParams } from 'next/navigation'
import { products } from '../../lib/categoryProduct';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams<{ name: string }>()
  const category = params.name

 
  // 카테고리 list 반환.
  const matchedProducts = products.filter((product) =>
    product.category.includes(category)
  );


  // 카테고리에 맞는 제품 목록 표시
  return (
    <main>
      <h1>{category} 상품 목록</h1>

      {matchedProducts.length > 0 ? (
        <ul>
          {matchedProducts.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price.toLocaleString()}원</p>
              <img
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>해당 카테고리에 등록된 상품이 없습니다.</p>
      )}
    </main>
  );
}
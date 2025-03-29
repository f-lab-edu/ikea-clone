'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { categories } from '../../lib/categoryData';

export default function ProductCategory() {
  const pathname = usePathname(); // 현 주소 값
  const slug = pathname.split('/').pop(); // 주소를 '/'기준으로 문자열로 나누고 주소 값에서 마지막 부분만 가져오기 ex) /category/bed -> bed

  // 현재 페이지 확인, 메인인지 아닌지에 따라 참/거짓 바뀜
  const isMain = pathname === '/';
  const isCategoryPage = pathname.startsWith('/category');

  // 카테고리 list 반환.
  const renderItem = (name: string, label: string) => (
    <li key={name}>
      <Link href={`/category/${name}`}>{label}</Link>
    </li>
  );

  // 메인 페이지용, 대분류만 보여줌
  if (isMain) {
    const topCategories = categories.filter((c) => !c.parent);
    return (
      <nav>
        <ul>
          {topCategories.map((c) => renderItem(c.name, c.label))}
        </ul>
      </nav>
    );
  }

  // 카테고리 세분화
  if (isCategoryPage && slug) {
    // url이 실제 데이터에 있는지 판별, 없으면 null
    const current = categories.find((c) => c.name === slug);
    if (!current) return null;

    // 부모 카테고리 찾기
    const parent = current.parent
      ? categories.find((c) => c.name === current.parent)
      : null;

    // 형제 or 자식 카테고리 목록 만들기
    const brotherOrChildren = categories.filter(
      (c) => c.parent === (parent ? parent.name : current.name)
    ).filter((c) => c.name !== current.name); // 현재 항목은 텍스트로만 표출할거니 제외

    return (
      <nav>
        <ul>
          {/* 항상 최우선 표출 메인 페이지/부모 카테고리 페이지로 이동 */}
          <li>
            {parent ? (
              <Link href={`/category/${parent.name}`}>←</Link>
            ) : (
              <Link href="/">←</Link>
            )}
          </li>

          {/* 현재 카테고리명 텍스트 */}
          <li>
            <span>{current.label}</span>
          </li>

          {/* 형제 / 자식 카테고리 */}
          {brotherOrChildren.map((c) => renderItem(c.name, c.label))}
        </ul>
      </nav>
    );
  }

  return null;
}

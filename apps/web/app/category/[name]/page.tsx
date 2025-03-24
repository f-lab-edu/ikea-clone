import { categories } from '../../lib/categoryData';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Next.JS 15부터 params(url 값)이 비동기(promise)일 수 있다.
// 그렇기에 async + await로 사용해야 안정적.

export default async function Page({
  params,
}: {
  params: { name: string } | Promise<{ name: string }>;
}) {
  const awaitedParams = await params;
  const { name } = awaitedParams;

  const current = categories.find((c) => c.name === name);
  // undifinde 등 예외값 처리, 이거 없으면 에러 뜸
  // if (!current) return notFound();

  const children = categories.filter((c) => c.parent === name);
  // const parent = current.parent;

  return (
    <main>
      <p>{name}</p>
      {/* <h1>{current.label}</h1>

      {parent && (
        <div>
          <Link href={`/category/${parent}`}>← 상위 카테고리로</Link>
        </div>
      )}

      {children.length > 0 ? (
        <ul>
          {children.map((c) => (
            <li key={c.name}>
              <Link href={`/category/${c.name}`}>{c.label}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>이 카테고리에는 하위 항목이 없습니다.</p>
      )} */}
    </main>
  );
}
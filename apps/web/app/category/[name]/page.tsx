export default async function Page({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  return (
    <main>
      <p>{name}</p>

    </main>
  );
}
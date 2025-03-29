import CategoryParentNav from './components/CategoryParentNav';
import Header from './components/Header';

export const metadata = {
  title: 'Ikea Clone',
  description: 'Ikea Clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header/>
        <CategoryParentNav/>
        {children}
      </body>
    </html>
  );
}
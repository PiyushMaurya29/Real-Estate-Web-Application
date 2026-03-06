import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'RealEstateApp',
  description: 'Modern real estate marketplace built with Next.js and Tailwind CSS'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="min-h-[calc(100vh-10rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

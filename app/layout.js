import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Buildspedia - Panduan Build Hero Mobile Legends Terlengkap',
  description: 'Platform panduan komprehensif MLBB dengan analisis Core Build, Situational Items, Emblem Sets, dan Gameplay Guide bergaya WildRiftFire.',
  keywords: ['Mobile Legends', 'MLBB Build', 'Hero Guide', 'Aamon Build', 'Akai Build', 'Emblem MLBB', 'Tier List'],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="dark scroll-smooth overflow-x-hidden">
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden w-full relative">
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

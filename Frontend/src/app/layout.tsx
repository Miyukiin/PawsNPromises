import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        {/* Add custom meta tags or links here if needed */}
      </head>
      <body className="bg-white font-sans flex flex-col min-h-screen">
        <Header />
        <main className="mt-12 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;

import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Learn Assamese - AI-Powered Language Learning',
  description: 'The first AI-powered platform for learning Assamese, designed for the diaspora community. Learn your heritage language with modern technology and cultural authenticity.',
  keywords: 'Assamese, language learning, diaspora, Sarvam AI, cultural preservation, Indian languages',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              Built with ❤️ for the Assamese diaspora community
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Powered by Sarvam.ai - India's Sovereign AI
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

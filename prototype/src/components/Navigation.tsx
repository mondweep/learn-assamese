'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-assamese-primary">
                Learn Assamese
              </div>
              <div className="font-assamese text-xl text-assamese-secondary hidden sm:block">
                অসমীয়া শিকা
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-assamese-primary transition-colors">
              Home
            </Link>
            <Link href="/learn" className="text-gray-700 hover:text-assamese-primary transition-colors">
              Learn
            </Link>
            <Link href="/demo" className="text-gray-700 hover:text-assamese-primary transition-colors">
              AI Demo
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-assamese-primary transition-colors">
              About
            </Link>
            <Link
              href="/learn"
              className="bg-assamese-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Start Learning
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-assamese-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:bg-assamese-bg rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/learn"
              className="block px-3 py-2 text-gray-700 hover:bg-assamese-bg rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Learn
            </Link>
            <Link
              href="/demo"
              className="block px-3 py-2 text-gray-700 hover:bg-assamese-bg rounded-md"
              onClick={() => setIsOpen(false)}
            >
              AI Demo
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:bg-assamese-bg rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/learn"
              className="block mx-3 my-2 px-3 py-2 bg-assamese-primary text-white text-center rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Start Learning
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

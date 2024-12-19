"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      root.classList.add('dark');
    } else {
      setTheme('light');
      root.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.theme = newTheme;
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  return (
    <nav className="fixed w-full bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-800/30 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/pygyat.png" alt="PyGyat Logo" width={32} height={32} />
          <span className="font-bold text-xl">PyGyat</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/docs" className="hover:text-purple-600">Documentation</Link>
          <a href="https://pypi.org/project/pygyat/" className="hover:text-purple-600">PyPI</a>
          <a href="https://github.com/shamith09/pygyat" className="hover:text-purple-600">GitHub</a>
          <a href="https://marketplace.visualstudio.com/items?itemName=shamith-pasula.vscode-pygyat" className="hover:text-purple-600">VS Code</a>
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`
            fixed top-0 right-0 w-64
            bg-gray-50 dark:bg-gray-800
            shadow-lg border-l border-gray-200 dark:border-gray-700
            transform transition-transform duration-300 ease-in-out z-40
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
            pb-8
          `}
        >
          <div className="h-full flex flex-col pt-20 px-6">
            <div className="flex flex-col gap-6">
              <Link 
                href="/docs" 
                className="hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Documentation
              </Link>
              <a 
                href="https://pypi.org/project/pygyat/" 
                className="hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                PyPI
              </a>
              <a 
                href="https://github.com/shamith09/pygyat" 
                className="hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                GitHub
              </a>
              <a 
                href="https://marketplace.visualstudio.com/items?itemName=shamith-pasula.vscode-pygyat" 
                className="hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                VS Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 
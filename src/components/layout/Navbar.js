import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Analyzer', id: 'analyzer' },
    { name: 'Home', id: 'home' }
  ];

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <div
          className={`mx-auto max-w-6xl rounded-[28px] border transition duration-300 ${
            scrolled
              ? 'glass-panel-strong border-white/60 shadow-[var(--shadow-lg)]'
              : 'glass-panel border-white/50 shadow-[var(--shadow-md)]'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <button className="flex items-center gap-3 text-left" onClick={() => navigateToPage('analyzer')}>
              <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,var(--primary-500),var(--accent-500))] text-lg font-bold text-white shadow-[var(--shadow-glow)]">
                TA
              </div>
              <div>
                <div className="headline-display text-lg font-bold text-[var(--foreground)]">TextAnalyzer</div>
                <div className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--foreground-muted)]">
                  Smart writing dashboard
                </div>
              </div>
            </button>

            <div className="hidden items-center gap-3 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToPage(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                    currentPage === item.id
                      ? 'bg-white text-[var(--foreground)] shadow-[var(--shadow-sm)]'
                      : 'text-[var(--foreground-soft)] hover:bg-white/60 hover:text-[var(--foreground)]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button size="sm" onClick={() => navigateToPage('analyzer')}>
                Start Editing
              </Button>
            </div>

            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/50 md:hidden"
              onClick={() => setIsOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              <span className="text-xl text-[var(--foreground)]">{isOpen ? 'x' : '='}</span>
            </button>
          </div>

          {isOpen && (
            <div className="border-t border-[var(--border)] px-4 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigateToPage(item.id)}
                    className={`rounded-[18px] px-4 py-3 text-left text-sm font-semibold ${
                      currentPage === item.id
                        ? 'bg-white text-[var(--foreground)] shadow-[var(--shadow-sm)]'
                        : 'bg-white/40 text-[var(--foreground-soft)]'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <Button onClick={() => navigateToPage('analyzer')}>Start Editing</Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="h-24 sm:h-28" />
    </>
  );
};

export default Navbar;

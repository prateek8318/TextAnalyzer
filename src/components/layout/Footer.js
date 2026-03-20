import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-shell px-4 pb-10 pt-6">
      <div className="glass-panel-strong mx-auto max-w-6xl rounded-[36px] px-6 py-10 sm:px-10">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="headline-display text-3xl font-bold gradient-text">TextAnalyzer</div>
            <p className="max-w-xl text-[15px] leading-7 text-[var(--foreground-soft)]">
              Stylish text workspace for counting, cleaning, formatting, and polishing content without extra clutter.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground-muted)]">Highlights</div>
            <div className="space-y-2 text-sm text-[var(--foreground-soft)]">
              <div>Live stats and word count</div>
              <div>One-click text cleanup</div>
              <div>Readable preview panel</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground-muted)]">Built For</div>
            <div className="space-y-2 text-sm text-[var(--foreground-soft)]">
              <div>Students</div>
              <div>Writers</div>
              <div>Content teams</div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-5 text-sm text-[var(--foreground-muted)]">
          Copyright {currentYear} TextAnalyzer. Crafted with a cleaner, more premium interface.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

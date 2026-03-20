import React from 'react';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const HomePage = ({ navigateToPage }) => {
  const features = [
    {
      title: 'Live Analysis',
      description: 'Typing ke saath instant word, character, paragraph aur reading time metrics milte hain.'
    },
    {
      title: 'Clean Formatting',
      description: 'Uppercase, lowercase, sentence case aur extra space cleanup ek click me ho jata hai.'
    },
    {
      title: 'Focused Workspace',
      description: 'Clutter-free layout content likhne aur review karne dono ke liye comfortable feel deta hai.'
    }
  ];

  const highlights = [
    { value: '08+', label: 'text actions' },
    { value: 'Live', label: 'stats panel' },
    { value: 'Fast', label: 'browser-side updates' }
  ];

  return (
    <div className="page-shell px-4 pb-12">
      <section className="mx-auto grid max-w-6xl gap-8 pt-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="fade-up space-y-6">
          <Badge size="lg" className="section-eyebrow border-0 bg-transparent px-0 py-0 text-[var(--primary-600)]">
            Modern text utility
          </Badge>

          <div className="space-y-4">
            <h1 className="headline-display max-w-3xl text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl">
              Plain tool ko <span className="gradient-text">stylish writing dashboard</span> mein badal diya.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--foreground-soft)]">
              Ab project sirf functional nahi, visually polished bhi lagega. Warm gradients, glass cards, better spacing aur clearer hierarchy ke saath UI much zyada premium feel karega.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="xl" onClick={() => navigateToPage('analyzer')}>
              Open Analyzer
            </Button>
            <Button variant="outline" size="xl" onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}>
              See Sections
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="glass-panel rounded-[24px] p-5">
                <div className="headline-display text-3xl font-bold text-[var(--foreground)]">{item.value}</div>
                <div className="mt-1 text-sm uppercase tracking-[0.18em] text-[var(--foreground-muted)]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up relative" style={{ animationDelay: '120ms' }}>
          <div className="float-slow absolute -right-4 -top-6 h-24 w-24 rounded-full bg-[rgba(217,91,30,0.16)] blur-2xl" />
          <div className="glass-panel-strong pattern-grid rounded-[36px] p-6 sm:p-8">
            <div className="grid gap-4">
              <div className="flex items-center justify-between rounded-[24px] bg-[var(--surface-strong)] p-4 shadow-[var(--shadow-sm)]">
                <div>
                  <div className="text-sm text-[var(--foreground-muted)]">Workspace</div>
                  <div className="headline-display text-xl font-bold">Premium UI Pass</div>
                </div>
                <Badge variant="accent">Refreshed</Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] bg-[linear-gradient(135deg,rgba(255,216,170,0.8),rgba(255,255,255,0.92))] p-5">
                  <div className="text-sm text-[var(--foreground-muted)]">Color system</div>
                  <div className="mt-2 headline-display text-2xl font-bold">Warm + modern</div>
                </div>
                <div className="rounded-[24px] bg-[linear-gradient(135deg,rgba(239,230,255,0.85),rgba(255,255,255,0.92))] p-5">
                  <div className="text-sm text-[var(--foreground-muted)]">Experience</div>
                  <div className="mt-2 headline-display text-2xl font-bold">Focused flow</div>
                </div>
              </div>

              <div className="rounded-[28px] bg-[var(--surface-dark)] p-6 text-white">
                <div className="text-sm uppercase tracking-[0.18em] text-white/60">What changed</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <div>
                    <div className="text-2xl font-bold">Hero</div>
                    <div className="text-sm text-white/70">strong first impression</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Cards</div>
                    <div className="text-sm text-white/70">consistent glass surface</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Buttons</div>
                    <div className="text-sm text-white/70">clear action hierarchy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl">
        <div className="mb-6">
          <div className="section-eyebrow">Why it looks better now</div>
          <h2 className="headline-display mt-4 text-4xl font-bold text-[var(--foreground)]">Visual system ab consistent hai</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} hover className="fade-up" style={{ animationDelay: `${index * 120}ms` }}>
              <CardContent className="space-y-4">
                <Badge variant={index === 1 ? 'accent' : index === 2 ? 'secondary' : 'primary'}>{`0${index + 1}`}</Badge>
                <h3 className="headline-display text-2xl font-bold text-[var(--foreground)]">{feature.title}</h3>
                <p className="leading-7 text-[var(--foreground-soft)]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

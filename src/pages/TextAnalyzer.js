import React, { useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { Textarea } from '../components/ui/Input';

const TextAnalyzer = ({ navigateToPage }) => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    characterCount: 0,
    wordCount: 0,
    sentenceCount: 0,
    paragraphCount: 0,
    readingTime: 0
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const trimmed = text.trim();
    const wordCount = trimmed ? trimmed.split(/\s+/).length : 0;
    const sentenceCount = trimmed ? text.split(/[.!?]+/).filter((item) => item.trim()).length : 0;
    const paragraphCount = trimmed ? text.split(/\n\s*\n/).filter((item) => item.trim()).length : 0;
    const characterCount = text.length;
    const readingTime = wordCount === 0 ? 0 : Math.max(1, Math.ceil(wordCount / 200));

    setStats({
      characterCount,
      wordCount,
      sentenceCount,
      paragraphCount,
      readingTime
    });
  }, [text]);

  const updateText = (value) => {
    setText(value);
    setCopied(false);
  };

  const textActions = [
    { label: 'UPPERCASE', action: () => updateText(text.toUpperCase()), variant: 'primary' },
    { label: 'lowercase', action: () => updateText(text.toLowerCase()), variant: 'outline' },
    {
      label: 'Capitalize',
      action: () =>
        updateText(
          text
            .split(' ')
            .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word))
            .join(' ')
        ),
      variant: 'secondary'
    },
    {
      label: 'Sentence Case',
      action: () =>
        updateText(
          text
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s+\w)/g, (match) => match.toUpperCase())
        ),
      variant: 'outline'
    },
    { label: 'Remove Spaces', action: () => updateText(text.replace(/\s+/g, ' ').trim()), variant: 'secondary' },
    {
      label: copied ? 'Copied' : 'Copy',
      action: async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1800);
        } catch (error) {
          console.error('Failed to copy text:', error);
        }
      },
      variant: copied ? 'success' : 'outline'
    },
    {
      label: 'Download',
      action: () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'text-analysis.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      },
      variant: 'outline'
    },
    { label: 'Clear', action: () => updateText(''), variant: 'danger' }
  ];

  const metricTiles = [
    {
      label: 'Characters',
      value: stats.characterCount,
      tone: 'bg-[linear-gradient(135deg,rgba(255,216,170,0.88),rgba(255,255,255,0.95))]'
    },
    {
      label: 'Words',
      value: stats.wordCount,
      tone: 'bg-[linear-gradient(135deg,rgba(231,244,238,0.92),rgba(255,255,255,0.95))]'
    },
    {
      label: 'Sentences',
      value: stats.sentenceCount,
      tone: 'bg-[linear-gradient(135deg,rgba(239,230,255,0.88),rgba(255,255,255,0.95))]'
    },
    {
      label: 'Paragraphs',
      value: stats.paragraphCount,
      tone: 'bg-[linear-gradient(135deg,rgba(255,241,212,0.9),rgba(255,255,255,0.95))]'
    }
  ];

  const averageWordsPerSentence = stats.sentenceCount > 0 ? (stats.wordCount / stats.sentenceCount).toFixed(1) : '0';
  const averageCharactersPerWord = stats.wordCount > 0 ? (stats.characterCount / stats.wordCount).toFixed(1) : '0';
  const textDensity = text.length > 0 ? Math.round((text.replace(/\s/g, '').length / text.length) * 100) : 0;

  return (
    <div className="page-shell px-4 pb-12">
      <section className="mx-auto grid max-w-6xl gap-8 pt-4 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div className="fade-up space-y-6">
          <div className="section-eyebrow">Fresh styled analyzer</div>
          <div className="space-y-4">
            <h1 className="headline-display max-w-3xl text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl">
              Text ko analyze karo, <span className="gradient-text">format karo aur polish bhi</span>.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--foreground-soft)]">
              Ab screen opening se hi styled lagti hai. Clear hierarchy, premium cards, beautiful spacing aur action buttons ke saath analyzer much more attractive ho gaya hai.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="xl" onClick={() => document.getElementById('editor-panel')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Typing
            </Button>
            <Button variant="outline" size="xl" onClick={() => navigateToPage('home')}>
              View Home Style
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-4">
            {metricTiles.map((tile, index) => (
              <div key={tile.label} className={`metric-tile fade-up rounded-[28px] p-5 shadow-[var(--shadow-sm)] ${tile.tone}`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-sm uppercase tracking-[0.18em] text-[var(--foreground-muted)]">{tile.label}</div>
                <div className="headline-display mt-3 text-4xl font-bold text-[var(--foreground)]">{tile.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up relative" style={{ animationDelay: '160ms' }}>
          <div className="glass-panel-strong rounded-[36px] p-6 sm:p-8">
            <div className="grid gap-4">
              <div className="rounded-[28px] bg-[var(--surface-dark)] p-6 text-white">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm uppercase tracking-[0.18em] text-white/60">Current session</div>
                    <div className="headline-display mt-2 text-3xl font-bold">Reading time {stats.readingTime} min</div>
                  </div>
                  <Badge variant="accent" className="bg-white/12 text-white border-white/10">
                    Live
                  </Badge>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] bg-white/8 p-4">
                    <div className="text-sm text-white/60">Average words per sentence</div>
                    <div className="mt-2 text-2xl font-bold">{averageWordsPerSentence}</div>
                  </div>
                  <div className="rounded-[22px] bg-white/8 p-4">
                    <div className="text-sm text-white/60">Text density</div>
                    <div className="mt-2 text-2xl font-bold">{textDensity}%</div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] bg-[rgba(255,255,255,0.7)] p-5">
                  <div className="text-sm text-[var(--foreground-muted)]">Best for</div>
                  <div className="mt-2 headline-display text-2xl font-bold text-[var(--foreground)]">Blogs, notes, essays</div>
                </div>
                <div className="rounded-[24px] bg-[rgba(255,240,218,0.7)] p-5">
                  <div className="text-sm text-[var(--foreground-muted)]">Quick flow</div>
                  <div className="mt-2 headline-display text-2xl font-bold text-[var(--foreground)]">Paste, clean, export</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="editor-panel" className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Card padding="lg" className="fade-up">
          <CardHeader className="flex flex-col gap-3 border-none p-0 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <CardTitle>Editor Workspace</CardTitle>
              <CardDescription>Text paste karo ya type karo, phir niche ke quick actions use karo.</CardDescription>
            </div>
            <Badge variant="outline">Real-time results</Badge>
          </CardHeader>

          <CardContent className="space-y-5">
            <Textarea
              value={text}
              onChange={(event) => updateText(event.target.value)}
              placeholder="Yahan apna text likho ya paste karo..."
              rows={14}
              className="rich-textarea resize-none"
            />

            <div className="action-grid">
              {textActions.map((action) => (
                <Button
                  key={action.label}
                  variant={action.variant}
                  onClick={action.action}
                  disabled={!text && action.label !== 'Download' && action.label !== 'Copy'}
                  className="justify-center rounded-[20px]"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card padding="lg" className="fade-up" style={{ animationDelay: '120ms' }}>
            <CardHeader>
              <CardTitle>Quick Insights</CardTitle>
              <CardDescription>Live metrics yahan clean format me dikh rahe hain.</CardDescription>
            </CardHeader>
            <CardContent className="info-list">
              <div className="info-row">
                <span className="text-[var(--foreground-soft)]">Reading time</span>
                <Badge>{`${stats.readingTime} min`}</Badge>
              </div>
              <div className="info-row">
                <span className="text-[var(--foreground-soft)]">Average chars per word</span>
                <Badge variant="secondary">{averageCharactersPerWord}</Badge>
              </div>
              <div className="info-row">
                <span className="text-[var(--foreground-soft)]">Average words per sentence</span>
                <Badge variant="accent">{averageWordsPerSentence}</Badge>
              </div>
              <div className="info-row">
                <span className="text-[var(--foreground-soft)]">Content density</span>
                <Badge variant="success">{`${textDensity}%`}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card padding="lg" className="fade-up" style={{ animationDelay: '220ms' }}>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>Formatted text ka quick read-only preview.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="preview-pane rounded-[24px] bg-[rgba(255,255,255,0.62)] p-5 leading-7 text-[var(--foreground-soft)]">
                {text ? (
                  <p className="whitespace-pre-wrap break-words">{text}</p>
                ) : (
                  <p className="muted-text">Preview yahan show hoga jab aap text type ya paste karenge.</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card padding="lg" className="fade-up" style={{ animationDelay: '320ms' }}>
            <CardHeader>
              <CardTitle>Tips</CardTitle>
              <CardDescription>Best results ke liye ye flow use kar sakte ho.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-[var(--foreground-soft)]">
              <div>1. Pehle raw text paste karo.</div>
              <div>2. Remove Spaces ya Sentence Case se cleanup karo.</div>
              <div>3. Preview check karke final text copy ya download kar lo.</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TextAnalyzer;

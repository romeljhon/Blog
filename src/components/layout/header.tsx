import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Sparkles } from 'lucide-react';
import { ThemeSwitcher } from '@/components/theme-switcher';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <BookOpen className="h-6 w-6 text-primary transition-transform group-hover:rotate-[-5deg]" />
          <h1 className="text-2xl font-bold text-foreground tracking-tight">ChronoBlog</h1>
        </Link>
        <div className="flex items-center gap-2">
            <nav className="flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/editor">
                  <Sparkles className='mr-2 h-4 w-4' />
                  AI Editor
                </Link>
              </Button>
            </nav>
            <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

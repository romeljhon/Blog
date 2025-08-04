"use client";

import { useState, useMemo } from 'react';
import { getArticles } from '@/lib/articles';
import { ArticleCard } from '@/components/article-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const allArticles = getArticles();

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    if (!lowerCaseQuery) {
      return allArticles;
    }
    return allArticles.filter(article =>
      article.title.toLowerCase().includes(lowerCaseQuery) ||
      article.content.toLowerCase().includes(lowerCaseQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
    );
  }, [searchQuery]);

  return (
    <div className="space-y-12 animate-in fade-in-50 duration-500">
      <div className="text-center space-y-4 pt-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter font-headline text-foreground">Welcome to ChronoBlog</h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">Exploring ideas, one post at a time. A modern, clean, and content-focused blog theme.</p>
      </div>
      
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            aria-label="Search articles"
            placeholder="Search articles by keyword or tag..."
            className="pl-12 w-full h-12 rounded-full text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-xl">No articles found.</p>
          <p className="text-muted-foreground">Try a different search query or clear the search.</p>
        </div>
      )}
    </div>
  );
}

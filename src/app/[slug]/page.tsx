import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getArticleBySlug, getArticles } from '@/lib/articles';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Tag } from 'lucide-react';
import { FormattedDate } from '@/components/formatted-date';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map(article => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return { title: 'Not Found' };
  }
  return {
    title: `${article.title} | ChronoBlog`,
    description: article.content.substring(0, 160),
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8 animate-in fade-in-50 duration-500">
      <header className="mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold mb-4 text-foreground tracking-tight">{article.title}</h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <FormattedDate dateString={article.date} formatString="PPP" />
          </div>
        </div>
      </header>

      {article.imageUrl && (
        <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-xl">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            data-ai-hint={article.imageHint}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      <div className="prose dark:prose-invert prose-lg max-w-none text-foreground/90 space-y-6">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      
      <footer className="mt-12 pt-8 border-t">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold">Tags</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">{tag}</Badge>
          ))}
        </div>
      </footer>
    </article>
  );
}

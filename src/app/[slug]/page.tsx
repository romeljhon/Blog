import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getArticleBySlug, getArticles } from '@/lib/articles';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Tag } from 'lucide-react';
import { format } from 'date-fns';

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
    <article className="max-w-4xl mx-auto py-8 animate-in fade-in-50 duration-500">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4 text-foreground">{article.title}</h1>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={article.date}>{format(new Date(article.date), 'PPP')}</time>
          </div>
        </div>
      </header>

      <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          data-ai-hint={article.imageHint}
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>

      <div className="font-body text-lg leading-relaxed space-y-6 text-foreground/90">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      
      <footer className="mt-12 pt-8 border-t">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-headline font-semibold">Tags</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <Badge key={tag} variant="outline" className="text-sm px-3 py-1">{tag}</Badge>
          ))}
        </div>
      </footer>
    </article>
  );
}

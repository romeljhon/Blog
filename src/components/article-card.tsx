import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const snippet = article.content.substring(0, 100) + '...';

  return (
    <Link href={`/${article.slug}`} className="group block" aria-label={`Read more about ${article.title}`}>
      <Card className="h-full flex flex-col transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 overflow-hidden bg-card/50">
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              data-ai-hint={article.imageHint}
            />
          </div>
          <div className="p-6">
            <CardTitle className="font-headline text-xl leading-tight group-hover:text-primary transition-colors">
              {article.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow px-6 pb-4">
          <p className="text-muted-foreground text-sm">{snippet}</p>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4 p-6 pt-0">
          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground w-full pt-4 mt-4 border-t">
            <div className="flex items-center gap-1.5">
              <User className="h-3 w-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              <time dateTime={article.date}>{format(new Date(article.date), 'MMM d, yyyy')}</time>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

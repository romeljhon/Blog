export type Article = {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string; // ISO string
  tags: string[];
  imageUrl: string;
  imageHint: string;
  content: string;
};

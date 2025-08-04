import type { Article } from './types';

const articles: Article[] = [
  {
    id: '1',
    slug: 'the-future-of-web-development',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    author: 'Jane Doe',
    date: '2024-07-15T10:00:00Z',
    tags: ['Web Development', 'Technology', 'Future', 'AI'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'abstract technology',
    content: `The web development landscape is in a constant state of flux, and 2024 is no exception. As we move further into the decade, several key trends are emerging that will shape how we build and interact with websites and applications. From the rise of AI-powered development tools to the continued importance of server-side rendering, staying ahead of the curve is crucial for any developer.

One of the most significant trends is the integration of Artificial Intelligence into the development workflow. Tools like GitHub Copilot are becoming more sophisticated, offering intelligent code completions, bug detection, and even generating entire functions from natural language descriptions. This doesn't mean developers will be replaced, but rather that their roles will evolve to focus more on architecture, user experience, and complex problem-solving, with AI handling more of the boilerplate code.

Another area to watch is the evolution of JavaScript frameworks. While React, Vue, and Angular continue to dominate, newer, lighter-weight alternatives are gaining traction. Svelte and SolidJS, for example, offer innovative approaches to reactivity and performance by shifting much of the work from runtime to compile time. This results in faster-loading applications and a more streamlined developer experience. The future is bright, and the key is to remain adaptable and eager to learn.`,
  },
  {
    id: '2',
    slug: 'a-journey-through-the-andes',
    title: 'A Journey Through the Andes: A Hiker\'s Paradise',
    author: 'John Smith',
    date: '2024-06-28T14:30:00Z',
    tags: ['Travel', 'Adventure', 'Hiking', 'South America'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mountain landscape',
    content: `The Andes mountain range, stretching along the western coast of South America, is a dream destination for hikers and adventurers. Its towering peaks, ancient ruins, and vibrant cultures offer an unparalleled travel experience. My recent journey took me from the colorful markets of Peru to the stark, beautiful landscapes of Patagonia in Chile, and every step was a revelation.

The Inca Trail to Machu Picchu is perhaps the most famous trek, and for good reason. The four-day hike winds through cloud forests and over high passes, culminating in the breathtaking view of the lost city at sunrise. But the Andes offer so much more. In Ecuador, the Quilotoa Loop provides a stunning multi-day trek around a volcanic crater lake, with stays in local, family-run guesthouses that offer a glimpse into Kichwa culture.

Further south, Patagonia's Torres del Paine National Park presents a more rugged challenge. The iconic 'W' Trek is a test of endurance, rewarding hikers with views of granite towers, massive glaciers, and turquoise lakes. The wind is a constant companion, a reminder of nature's raw power. Whether you are a seasoned mountaineer or a casual day-hiker, the Andes have a path for you, promising unforgettable memories and a profound connection to the natural world.`,
  },
  {
    id: '3',
    slug: 'the-art-of-sourdough',
    title: 'The Art of Sourdough: Mastering the Perfect Loaf',
    author: 'Emily White',
    date: '2024-05-19T09:00:00Z',
    tags: ['Food', 'Baking', 'DIY', 'Sourdough'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artisan bread',
    content: `Baking sourdough bread is more than just a culinary task; it's a rewarding journey of patience, science, and intuition. The process, which relies on a living culture of wild yeast and bacteria—the sourdough starter—can seem intimidating at first, but mastering it is achievable for any home baker. The key is understanding the fundamentals and embracing the slow, meditative rhythm of the craft.

Your sourdough starter is the heart of your bread. It's a living entity that needs to be fed regularly with flour and water. A healthy, active starter is bubbly, smells pleasantly sour, and reliably doubles in size after a feeding. This starter is what gives your bread its characteristic tangy flavor and open, airy crumb. Naming your starter is optional, but highly recommended for bonding purposes!

The baking process itself involves several stages: mixing, bulk fermentation, shaping, and the final proof. Each step plays a critical role in developing the dough's structure and flavor. Temperature is a crucial variable; a warmer environment will speed up fermentation, while a cooler one will slow it down, allowing for more complex flavors to develop. Don't be discouraged by your first few loaves. Like any art form, sourdough baking takes practice. But the moment you pull that first perfect, golden-brown, crackling loaf from your oven, you'll know it was all worth it.`,
  },
];

// Sort articles by date in descending order (newest first)
const sortedArticles = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getArticles(): Article[] {
  return sortedArticles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return sortedArticles.find(article => article.slug === slug);
}

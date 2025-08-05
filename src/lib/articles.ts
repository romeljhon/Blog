import type { Article } from './types';

const articles: Article[] = [
  {
    id: '1',
    slug: 'the-future-of-web-development',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    author: 'Jane Doe',
    date: '2024-07-15T10:00:00Z',
    tags: ['Web Development', 'Technology', 'Future', 'AI'],
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=600&h=400&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1519045769291-b65e9f1e1883?q=80&w=600&h=400&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1584921443657-3e1f5b451528?q=80&w=600&h=400&fit=crop',
    imageHint: 'artisan bread',
    content: `Baking sourdough bread is more than just a culinary task; it's a rewarding journey of patience, science, and intuition. The process, which relies on a living culture of wild yeast and bacteria—the sourdough starter—can seem intimidating at first, but mastering it is achievable for any home baker. The key is understanding the fundamentals and embracing the slow, meditative rhythm of the craft.

Your sourdough starter is the heart of your bread. It's a living entity that needs to be fed regularly with flour and water. A healthy, active starter is bubbly, smells pleasantly sour, and reliably doubles in size after a feeding. This starter is what gives your bread its characteristic tangy flavor and open, airy crumb. Naming your starter is optional, but highly recommended for bonding purposes!

The baking process itself involves several stages: mixing, bulk fermentation, shaping, and the final proof. Each step plays a critical role in developing the dough's structure and flavor. Temperature is a crucial variable; a warmer environment will speed up fermentation, while a cooler one will slow it down, allowing for more complex flavors to develop. Don't be discouraged by your first few loaves. Like any art form, sourdough baking takes practice. But the moment you pull that first perfect, golden-brown, crackling loaf from your oven, you'll know it was all worth it.`,
  },
  {
    id: '4',
    slug: 'the-psychology-of-color-in-branding',
    title: 'The Psychology of Color in Branding',
    author: 'Alex Johnson',
    date: '2024-04-22T11:00:00Z',
    tags: ['Branding', 'Marketing', 'Psychology', 'Design'],
    imageUrl: 'https://images.unsplash.com/photo-1534531688121-12581cde8743?q=80&w=600&h=400&fit=crop',
    imageHint: 'colorful abstract art',
    content: `Color is a powerful tool in branding. It can evoke emotions, convey messages, and create a lasting impression on your audience. Understanding the psychology of color can help you build a stronger, more effective brand identity.

Red, for example, is often associated with energy, passion, and excitement. It's a color that grabs attention and can create a sense of urgency. Think of brands like Coca-Cola and Netflix. Blue, on the other hand, is often associated with trust, stability, and calmness. It's a popular choice for financial institutions and tech companies, like Facebook and IBM.

When choosing a color palette for your brand, it's important to consider your target audience, your industry, and the message you want to convey. A well-chosen color palette can help you stand out from the competition and create a brand that resonates with your customers.`,
  },
  {
    id: '5',
    slug: 'a-beginners-guide-to-urban-gardening',
    title: 'A Beginner\'s Guide to Urban Gardening',
    author: 'Samantha Green',
    date: '2024-03-10T16:45:00Z',
    tags: ['Gardening', 'Urban Living', 'DIY', 'Sustainability'],
    imageUrl: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=600&h=400&fit=crop',
    imageHint: 'potted plants city',
    content: `Living in a city doesn't mean you can't have a green thumb. Urban gardening is a great way to bring nature into your home, grow your own food, and reduce your carbon footprint. Whether you have a spacious balcony or just a sunny windowsill, you can create a thriving garden in the heart of the city.

Start small with a few herbs like basil, mint, and parsley. They're easy to grow and will add fresh flavor to your meals. If you have more space, you can try growing vegetables like tomatoes, peppers, and lettuce in containers. Be sure to choose a spot that gets at least six hours of sunlight per day.

Urban gardening is not just about growing plants; it's about connecting with nature and your community. Join a local gardening group, share your produce with your neighbors, and enjoy the satisfaction of growing your own food.`,
  },
  {
    id: '6',
    slug: 'mindfulness-in-the-digital-age',
    title: 'Mindfulness in the Digital Age: Finding Calm in the Chaos',
    author: 'Dr. Evelyn Reed',
    date: '2024-07-20T09:00:00Z',
    tags: ['Mindfulness', 'Wellness', 'Technology', 'Mental Health'],
    imageUrl: 'https://images.unsplash.com/photo-1591348122448-a76428198b81?q=80&w=600&h=400&fit=crop',
    imageHint: 'calm meditation',
    content: `In our hyper-connected world, finding moments of peace can feel like a monumental task. The constant barrage of notifications, emails, and social media updates keeps our minds in a perpetual state of busyness. This is where mindfulness comes in—a practice of being present and fully aware of the current moment.

Practicing mindfulness doesn't require a silent retreat or hours of meditation. It can be as simple as taking a few deep breaths before checking your phone in the morning, or paying full attention to the taste and texture of your food during a meal. The goal is to break the cycle of automatic, distracted behavior and cultivate a sense of intentionality.

Digital tools can paradoxically help in this endeavor. Apps like Calm and Headspace offer guided meditations and mindfulness exercises tailored to modern life. Setting "digital sundowns" by putting away screens an hour before bed can also significantly improve sleep quality and reduce anxiety. By integrating small, mindful habits into our daily routine, we can reclaim our attention and find calm amidst the digital chaos.`,
  },
  {
    id: '7',
    slug: 'the-rise-of-sustainable-fashion',
    title: 'The Rise of Sustainable Fashion: A Guide to Conscious Consumerism',
    author: 'Leo Maxwell',
    date: '2024-07-18T11:30:00Z',
    tags: ['Fashion', 'Sustainability', 'Eco-friendly', 'Lifestyle'],
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&h=400&fit=crop',
    imageHint: 'sustainable clothing',
    content: `The fashion industry is undergoing a significant transformation. For years, the "fast fashion" model has dominated, prioritizing cheap, trendy clothing at the cost of environmental and ethical standards. However, a growing movement towards sustainable fashion is challenging this paradigm, encouraging consumers to think differently about what they wear.

Sustainable fashion encompasses a range of practices, from using eco-friendly materials like organic cotton and Tencel to ensuring fair wages and safe working conditions for garment workers. It also involves a shift in mindset—moving away from disposable trends and towards a wardrobe built on quality, timeless pieces. Thrifting, clothing swaps, and supporting brands that offer repair services are all part of this conscious consumerism.

As a consumer, you have the power to drive change. Before making a purchase, ask questions: Who made this garment? What is it made of? Will I wear it for years to come? By making informed choices, we can collectively support a fashion industry that is not only stylish but also kind to people and the planet. The future of fashion is one where style and sustainability go hand-in-hand.`,
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

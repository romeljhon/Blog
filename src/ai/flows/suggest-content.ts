'use server';

/**
 * @fileOverview Suggests alternative titles, summaries, tags, keywords, and related content for articles.
 *
 * - suggestContent - A function that handles the content suggestion process.
 * - SuggestContentInput - The input type for the suggestContent function.
 * - SuggestContentOutput - The return type for the suggestContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestContentInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The main content of the article for which suggestions are needed.'),
  currentTitle: z
    .string()
    .describe('The current title of the article.'),
});
export type SuggestContentInput = z.infer<typeof SuggestContentInputSchema>;

const SuggestContentOutputSchema = z.object({
  alternativeTitles: z.array(z.string()).describe('A list of alternative titles for the article.'),
  summary: z.string().describe('A concise summary of the article content.'),
  tags: z.array(z.string()).describe('Suggested tags for the article.'),
  keywords: z.array(z.string()).describe('Suggested keywords for the article.'),
  relatedContent: z.array(z.string()).describe('Suggestions for related content or articles.'),
});
export type SuggestContentOutput = z.infer<typeof SuggestContentOutputSchema>;

export async function suggestContent(input: SuggestContentInput): Promise<SuggestContentOutput> {
  return suggestContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestContentPrompt',
  input: {schema: SuggestContentInputSchema},
  output: {schema: SuggestContentOutputSchema},
  prompt: `You are an AI assistant helping bloggers optimize their content.

  Based on the provided article content and current title, suggest:
  - 3 alternative titles that are more engaging and SEO-friendly.
  - A concise summary of the article content.
  - 5 relevant tags for the article.
  - 5 relevant keywords for the article.
  - 3 suggestions for related content or articles that the blogger could link to or create next.

  Article Content:
  {{articleContent}}

  Current Title:
  {{currentTitle}}`,
});

const suggestContentFlow = ai.defineFlow(
  {
    name: 'suggestContentFlow',
    inputSchema: SuggestContentInputSchema,
    outputSchema: SuggestContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

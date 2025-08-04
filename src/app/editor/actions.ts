'use server';

import { suggestContent, type SuggestContentInput } from '@/ai/flows/suggest-content';

export async function handleSuggestContent(input: SuggestContentInput) {
  try {
    const suggestions = await suggestContent(input);
    return { success: true, data: suggestions };
  } catch (error) {
    console.error('Error in handleSuggestContent:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: `Failed to generate content suggestions. ${errorMessage}` };
  }
}

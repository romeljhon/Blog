"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { handleSuggestContent } from './actions';
import type { SuggestContentOutput } from '@/ai/flows/suggest-content';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

const formSchema = z.object({
  title: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }),
  content: z.string().min(100, {
    message: "Article content must be at least 100 characters.",
  }),
});

export default function EditorPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestContentOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestions(null);

    const result = await handleSuggestContent({
      currentTitle: values.title,
      articleContent: values.content,
    });

    setIsLoading(false);

    if (result.success && result.data) {
      setSuggestions(result.data);
      toast({
        title: "Success!",
        description: "Content suggestions have been generated.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.error || "There was a problem with your request.",
      });
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto animate-in fade-in-50 duration-500">
      <div className="lg:col-span-1">
        <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Content Editor</CardTitle>
              <CardDescription>Write your article and get AI-powered suggestions to improve it.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Article Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Your amazing article title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Article Content</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Once upon a time in a land of code..."
                            className="min-h-[300px] font-body"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        Get Suggestions
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-1 space-y-6">
        {isLoading && (
          <Card className="flex items-center justify-center p-8 h-full">
            <div className="text-center text-muted-foreground flex flex-col items-center gap-4">
              <Loader2 className="h-8 w-8 animate-spin" />
              <p className='font-semibold'>Our AI is thinking... Please wait.</p>
            </div>
          </Card>
        )}
        {suggestions && (
          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="font-headline text-xl">Alternative Titles</CardTitle></CardHeader>
              <CardContent><ul className="list-disc list-inside space-y-2 text-sm">{suggestions.alternativeTitles.map((title, i) => <li key={i}>{title}</li>)}</ul></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="font-headline text-xl">AI-Generated Summary</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">{suggestions.summary}</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="font-headline text-xl">Tags & Keywords</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Suggested Tags</h4>
                  <div className="flex flex-wrap gap-2">{suggestions.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}</div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Suggested Keywords</h4>
                  <div className="flex flex-wrap gap-2">{suggestions.keywords.map(kw => <Badge key={kw} variant="outline">{kw}</Badge>)}</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="font-headline text-xl">Related Content Ideas</CardTitle></CardHeader>
              <CardContent><ul className="list-disc list-inside space-y-2 text-sm">{suggestions.relatedContent.map((idea, i) => <li key={i}>{idea}</li>)}</ul></CardContent>
            </Card>
          </div>
        )}
        {!isLoading && !suggestions && (
          <Card className="flex items-center justify-center p-8 h-full bg-accent/20 border-dashed">
            <div className="text-center text-muted-foreground">
              <Wand2 className="mx-auto h-10 w-10 mb-4" />
              <p className="font-semibold text-lg font-headline">Your AI suggestions will appear here.</p>
              <p className="text-sm mt-1">Fill out the form and click "Get Suggestions" to start.</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

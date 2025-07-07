'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { quotes } from '@/lib/quotes';

export default function QuoteForm() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const matched = quotes.filter(q => q.topic.toLowerCase() === topic.toLowerCase());
    const selected = matched.slice(0, 3).map(q => q.quote);
    setResults(selected);
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 border rounded-xl shadow space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Enter a topic (e.g., inspiration)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <div className="text-sm text-muted-foreground">
          Try topics like: <span className="font-medium">inspiration</span>, <span className="font-medium">success</span>, <span className="font-medium">life</span>
        </div>
        <Button type="submit">Get Quotes</Button>
      </form>

      <div className="space-y-2">
        {results.length > 0 &&
          results.map((quote, i) => (
            <p key={i} className="italic text-muted-foreground">“{quote}”</p>
          ))
        }

        {submitted && results.length === 0 && topic && (
          <p className="text-destructive">
            No quotes found for <span className="font-semibold">&quot;{topic}&quot;</span>.
          </p>
        )}
      </div>
    </div>
  );
}

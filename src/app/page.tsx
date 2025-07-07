import QuoteForm from './components/QuoteForm';

export default function HomePage() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Quote Generator</h1>
      <QuoteForm />
    </main>
  );
}

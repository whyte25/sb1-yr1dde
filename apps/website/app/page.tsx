import { Button } from 'ui';

export default function WebsiteHome() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Event Management Platform</h1>
      <p className="mb-4">Discover and book amazing events in your area.</p>
      <Button>Explore Events</Button>
    </div>
  );
}
import { Button } from 'ui';

export default function EventPlannerHome() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Event Planner Dashboard</h1>
      <p className="mb-4">Plan and organize events with ease.</p>
      <Button>Start New Event</Button>
    </div>
  );
}
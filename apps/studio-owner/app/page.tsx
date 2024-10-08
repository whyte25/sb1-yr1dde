import { Button } from 'ui';

export default function StudioOwnerHome() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Studio Owner Dashboard</h1>
      <p className="mb-4">Manage your studio and upcoming events.</p>
      <Button>View Studio Calendar</Button>
    </div>
  );
}
import { Button } from 'ui';

export default function AdminHome() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-4">Welcome to the admin dashboard. Manage your event management system here.</p>
      <Button>View Analytics</Button>
    </div>
  );
}
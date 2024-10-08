import { Button } from 'ui';

export default function ProducerOwnerHome() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Producer Owner Dashboard</h1>
      <p className="mb-4">Manage your productions and collaborate with studios.</p>
      <Button>Create New Production</Button>
    </div>
  );
}
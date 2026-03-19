// import { Button } from '@/components/ui/button';

import { CircleFadingArrowUpIcon } from 'lucide-react';

import { Button } from './components/ui/button';

function App() {
  return (
    <div>
      App
      <Button variant="outline">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button>
        <CircleFadingArrowUpIcon /> Click me
      </Button>
    </div>
  );
}

export default App;

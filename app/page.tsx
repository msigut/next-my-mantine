import Link from 'next/link';
import { Button } from '@mantine/core';

export default async function HomePage() {
  return (
      <>
          <Button component={Link} href="/hello">
            Next link button
          </Button>
          <ul>
              <li><Link href="/ui">UI</Link></li>
              <li><Link href="/ui/my">UI: My</Link></li>
          </ul>
      </>
  );
}

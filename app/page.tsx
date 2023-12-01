import Link from 'next/link';
import {Button, Image} from '@mantine/core';

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

          <Image
              src="/banner/1.denver.jpg"
              width={400}
              height={200}
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
          />
      </>
  );
}

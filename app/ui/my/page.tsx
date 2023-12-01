import Link from 'next/link';
import { Button } from '@mantine/core';

export default async function UiMyPage() {
  return (
      <Button component={Link} href="/hello">
        UI > My > Next link button
      </Button>
  );
}

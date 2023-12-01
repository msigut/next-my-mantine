'use client';
import Link from 'next/link';
import {Button, Group, Image, useMantineColorScheme} from '@mantine/core';

export default function HomePage() {
    const { setColorScheme } = useMantineColorScheme();
    return (
        <>
            <Button component={Link} href="/hello">
                Next link button
            </Button>

            <ul>
                <li><Link href="/ui">UI</Link></li>
                <li><Link href="/ui/my">UI: My</Link></li>
            </ul>

            <Group justify="center" mt="xl">
                <Button onClick={() => setColorScheme('light')}>Light</Button>
                <Button onClick={() => setColorScheme('dark')}>Dark</Button>
                <Button onClick={() => setColorScheme('auto')}>Auto</Button>
            </Group>

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

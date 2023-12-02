'use client'
import {Button, Group, useMantineColorScheme} from '@mantine/core';

export default function ThemeColor()
{
    const { setColorScheme } = useMantineColorScheme();
    return (
        <>
            <h4>Zmena barev tema Mantine</h4>

            <Group justify="center" mt="xl">
                <Button onClick={() => setColorScheme('light')}>Light</Button>
                <Button onClick={() => setColorScheme('dark')}>Dark</Button>
                <Button onClick={() => setColorScheme('auto')}>Auto</Button>
            </Group>
        </>
    );
}

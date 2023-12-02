'use server';
import { Text } from '@mantine/core';

export default async function InfoLoadComponent() {
    var when = new Date().toUTCString();
    return (
         <Text size="sm" c="dimmed">Vytvoreno: {when}</Text>
    );
}

import Link from 'next/link';

export default function HomePage() {
    return (
        <>
            <h4>App router + Mantine</h4>
            <ul>
                <li><Link href="/image">Image</Link> (pouziti Nextjs obrazku s Mantine)</li>
                <li><Link href="/color">Theme color</Link> (zmena barvy Tema Mantine)</li>
                <li><Link href="/card">Card</Link> (pouziti rozsirenych Mantine komponent)</li>
                <li><Link href="/server">Server</Link> (ciste pouziti serveru - SSR)</li>
                <li><Link href="/try-both">Try both</Link> (kombinace server & client komponent) <b>ERROR</b></li>
            </ul>
        </>
    );
}

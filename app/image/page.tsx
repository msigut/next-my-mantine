import {Image} from '@mantine/core';

export default function ThemeColor()
{
    return (
        <>
            <h4>Pristup k obrazkum</h4>

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

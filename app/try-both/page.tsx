import {Button} from '@mantine/core';
import InfoShowComponent from './component/info-show'
import InfoLoadComponent from './component/info-load'

export default function ServerClientPage() {
    return (
        <>
            <InfoLoadComponent />
            <InfoShowComponent />
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">Update</Button>
        </>
    );
}



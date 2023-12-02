import Image from "next/image";
import path from "path";
import fs from "fs";

function getPublicFiles(dirRelativeToPublicFolder: string = "banner"): string[] {
    const dir = path.resolve("./public", dirRelativeToPublicFolder);

    const filenames = fs.readdirSync(dir);
    const result = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name));

    console.log("Files: " + result.join(", "));
    return result;
}

function getRandom(arr: string[]) : string {
    return arr[Math.floor(Math.random() * arr.length)];
}

export default function ValueMultiPage() {

    const files = getPublicFiles();
    let fileSelected = getRandom(files);

    return (
        <>
            <Image src={fileSelected} width="500" height="200"  alt="vybrany obrazek" />
            <br/>
            {fileSelected}
        </>
    );
}

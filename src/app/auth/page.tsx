/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="absolute flex h-3/6 w-4/12 items-start justify-center rounded-xl bg-white">
                <Link
                    href={'/'}
                    className="relative flex h-1/6 w-full flex-row items-center justify-center rounded-xl bg-red-600"
                >
                    <Image
                        id="logo"
                        src="https://i.ibb.co/SKRzprR/logo2.png"
                        width={600}
                        height={20}
                        alt="logo"
                        className="w-3/4"
                    ></Image>
                </Link>
            </div>
        </main>
    );
}

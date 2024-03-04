/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="absolute flex h-3/6 w-3/12 items-center justify-center">
                <Link
                    href={'/'}
                    className="flex h-8 flex-row items-center justify-center"
                >
                    <img
                        id="logo"
                        src="https://drive.google.com/file/d/1OyXrR-w4XfzMvck3pS-QS_d3089CP3xi/view"
                        width={600}
                        height={20}
                        alt="logo"
                    ></img>
                </Link>
            </div>
        </main>
    );
}

'use client'
import Link from 'next/link';
import { handleSubmit } from './submit';

export default function Page() {
    let username: string = '';
    let email: string = '';
    let password: string = '';
    let confirm: string = '';
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="absolute flex w-4/12 flex-col items-center justify-start rounded-t-xl bg-white">
                <Link
                    href={'/'}
                    className="relative mb-5 flex h-48 w-full flex-row items-center justify-center rounded-t-xl bg-red-600"
                >
                    <div className="relative h-4/6 w-full bg-logo bg-cover bg-center"></div>
                </Link>
                <div className="relative flex h-4/6 w-10/12 flex-col items-center justify-start">
                    <input
                        placeholder="Username"
                        className="mb-5 mt-12 w-11/12 border-b-2 border-red-600 p-5 text-left text-2xl"
                        onChange={(e) => username = e.target.value}
                    />
                    <input
                        placeholder="Email"
                        className="m-5 w-11/12 border-b-2 border-red-600 p-5 text-left text-2xl"
                        onChange={(e) => email = e.target.value}
                    />
                    
                    <input
                        placeholder="Password"
                        type='password'
                        className="m-5 w-11/12 border-b-2 border-red-600 p-5 text-left text-2xl"
                        onChange={(e) => password = e.target.value}
                    />
                    <input
                        placeholder="Confirm Password"
                        type='password'
                        className="m-5 w-11/12 border-b-2 border-red-600 p-5 text-left text-2xl"
                        onChange={(e) => confirm = e.target.value}
                    />
                    <Link
                        href={'/'}
                        className="relative m-5 w-6/12 rounded-lg bg-red-600 p-5 text-center text-3xl font-bold text-white"
                        onClick={() => handleSubmit(username, email, password)}
                    >
                        Register
                    </Link>
                    <div className="relative w-11/12 text-center mb-12">
                        Already have an account?{' '}
                        <Link
                            href={'/auth'}
                            draggable="false"
                            className="hover:text-red-600"
                        >
                            click here!
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

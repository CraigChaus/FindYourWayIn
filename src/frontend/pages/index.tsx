import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LandingPage: NextPage = () => {
    const router = useRouter();

    return (
        <div className="block h-screen bg-cover bg-landing-page">
            <div className="flex flex-col items-center justify-center h-screen bg-gray-600 bg-opacity-70">
                <h1 className="text-6xl text-center text-white">
                    FYWI <br></br> Walstraat
                </h1>
                <div className="flex flex-col items-center w-4/5 mt-12 justify-evenly h-2/5">
                    <div className="w-full">
                        <button
                            type="button"
                            onClick={() => router.push('/login')}
                            className="w-full py-3 mb-4 text-sm font-medium leading-snug text-white transition duration-150 ease-in-out bg-green-600 shadow-md rounded-xl winline-block px-7 hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => router.push('/signup')}
                            className="inline-block w-full py-3 mt-4 text-sm font-medium leading-snug text-green-700 transition duration-150 ease-in-out shadow-md rounded-xl bg-gray-50 px-7 hover:bg-gray-300 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-lg"
                        >
                            Sign up
                        </button>
                    </div>

                    <Link href="/home">
                        <a className="text-base font-medium text-gray-300">
                            Continue without login
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

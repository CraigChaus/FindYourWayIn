import { ReactNode } from 'react';
import Footer from '@components/global/Footer';

interface AuthProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthProps) {
    return (
        <div className="h-screen bg-cover bg-landing-page">
            <div className="flex h-screen bg-gray-600 bg-opacity-70">
                <div className="flex flex-col items-center justify-around w-4/5 m-auto bg-gray-100 shadow-xl h-3/5 rounded-2xl">     
                    {children}
                </div>
            </div>
            <Footer />
        </div>
   )
}
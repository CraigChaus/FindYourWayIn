import { ReactNode } from 'react';
import Footer from '@components/global/Footer';

interface AuthProps {
    children: ReactNode;
    isSignUp?: boolean;
}
/**
 * Layout componenet for authentication pages
 * @param children - children of the component
 * @returns AuthLayout component
 */
export default function AuthLayout({ children, isSignUp }: AuthProps) {
    return (
        <div className="h-screen bg-cover bg-landing-page">
            <div className="flex flex-col h-screen bg-gray-600 bg-opacity-70">
                <div
                    className={`flex flex-col items-center justify-around w-4/5 m-auto bg-gray-100 shadow-xl ${
                        isSignUp ? 'h-4/5' : 'h-3/5'
                    } rounded-2xl`}
                >
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}

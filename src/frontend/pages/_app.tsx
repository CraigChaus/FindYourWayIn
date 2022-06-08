import '../styles/globals.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import { AppProps } from 'next/app';
import { AuthContextProvider } from '../contexts/AuthContext';
import { FilterContextProvider } from '../contexts/FilterContext';

const apiKey: string = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Wrapper
            apiKey={apiKey}
            libraries={['places', 'geometry']}
            language={'en'}
        >
            <AuthContextProvider>
                <FilterContextProvider>
                    <Component {...pageProps} />
                </FilterContextProvider>
            </AuthContextProvider>
        </Wrapper>
    );
}

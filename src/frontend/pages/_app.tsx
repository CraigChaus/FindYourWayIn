import '../styles/globals.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import { AppProps } from 'next/app';

const apiKey: string = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Wrapper
            apiKey={apiKey}
            libraries={['places', 'geometry']}
            language={'en'}
        >
            <Component {...pageProps} />
        </Wrapper>
    );
}

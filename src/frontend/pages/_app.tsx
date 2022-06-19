import '../styles/globals.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import { AppProps } from 'next/app';
import { AuthContextProvider } from '../contexts/AuthContext';
import { FilterContextProvider } from '../contexts/FilterContext';
import { Suspense } from 'react';
import { appWithTranslation } from 'next-i18next';
import '/styles/mainPage.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Suspense fallback="loading">
            <Wrapper
                apiKey={process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY}
                libraries={['places', 'geometry']}
                language={'en'}
            >
                <AuthContextProvider>
                    <FilterContextProvider>
                        <Component {...pageProps} />
                    </FilterContextProvider>
                </AuthContextProvider>
            </Wrapper>
        </Suspense>
    );
}

export default appWithTranslation(MyApp);

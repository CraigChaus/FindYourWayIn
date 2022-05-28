import '../styles/globals.css'
import { Wrapper } from "@googlemaps/react-wrapper";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps}: AppProps) {
    return (
        <Wrapper
            apiKey={"AIzaSyAu53ClDbYWFVWX60wEfEQ5Ed4R-9lYU8E"}
            libraries={['places', 'geometry']}
            language={'en'}
        >
            <Component {...pageProps}/>
        </Wrapper>
    );
};
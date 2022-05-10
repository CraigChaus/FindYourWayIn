import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function Gmap(){

    let map : google.maps.Map;
    
    const render = (status : Status) => {
        return <h1> {status} </h1>;
    };

    <Wrapper apiKey="AIzaSyD2Zs61dN0v-Rv871JYZR6GzVy_intXtv8" render={render}>
            
    </Wrapper>

    return (

    )
}
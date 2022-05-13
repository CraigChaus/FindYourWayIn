import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import GMap from '../components/gmaps/gmap';

const render = (status: Status) => {
  return <h1>{status}</h1>;
};



const Home: NextPage = () => {
  
  
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = React.useState(3); // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 10,
    lng: 10,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng!]);
  };
  
  const onIdle = (m: google.maps.Map) => {
    console.log("onIdle");
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };
  
  const form = (
    <div
      style={{
        padding: "1rem",
        flexBasis: "250px",
        height: "100%",
        overflow: "auto",
      }}
    >
      <label htmlFor="zoom">Zoom</label>
      <input
        type="number"
        id="zoom"
        name="zoom"
        value={zoom}
        onChange={(event) => setZoom(Number(event.target.value))}
      />
      <br />
      <label htmlFor="lat">Latitude</label>
      <input
        type="number"
        id="lat"
        name="lat"
        value={center.lat}
        onChange={(event) =>
          setCenter({ ...center, lat: Number(event.target.value) })
        }
      />
      <br />
      <label htmlFor="lng">Longitude</label>
      <input
        type="number"
        id="lng"
        name="lng"
        value={center.lng}
        onChange={(event) =>
          setCenter({ ...center, lng: Number(event.target.value) })
        }
      />
      <h3>{clicks.length === 0 ? "Click on map to add markers" : "Clicks"}</h3>
      {clicks.map((latLng, i) => (
        <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
      ))}
      <button onClick={() => setClicks([])}>Clear</button>
    </div>
  );

  return (
    <div className={styles.container} style={{display: "flex", height:"100%"}}>
      <Head>
        <title>Create Next App</title>
        
      </Head>

      <Wrapper apiKey={"AIzaSyD2Zs61dN0v-Rv871JYZR6GzVy_intXtv8"} render={render}>
        <GMap 
          center={center} 
          zoom={zoom}
          onIdle={onIdle}
          onClick={onClick}
          style={{ flexGrow: "1", height: "100%"}}
        ></GMap>
      </Wrapper>
      {form}
    </div>
  )
}

export default Home

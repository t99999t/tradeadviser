import GoogleMapReact from 'google-map-react';

import { Container } from 'react-bootstrap';
import './map.css'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function Maps() {
    const defaultProps = {
        center: {
            lat: 5.99835602,
            lng: 77.01502627
        },
        zoom: 6
    };
    console.log(defaultProps);


    return (<Container>
      
       
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key:''//'AIzaSyD7AinPq5da_9hGBc6QuhNdH8Mgnrvav0Y'
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onChildMouseMove={
                    (child, latlng) => {
                        console.log(child, latlng);
                    }
                }
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="Marker"
                />
            </GoogleMapReact>
        </div>
   
    </Container>
    );
}

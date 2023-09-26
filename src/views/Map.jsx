import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{ fontSize: '40px' }}>{text}</div>;

export function Map() {

    const defaultProps = {
        center: {
            lat: 32.077926,
            lng: 34.774209
        },
        zoom: 11
    };

    return (
        <div id="map" className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC-mFfPF44l4nynJmr-GeOLaXo0OnXGa8g" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={32.077926}
                    lng={34.774209}
                    text={<i className="fa-solid fa-location-pin fa-beat fa-sm"></i>}
                />
            </GoogleMapReact>
        </div>
    );
}
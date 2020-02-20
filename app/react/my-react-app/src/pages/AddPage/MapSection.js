import React from 'react';

import MapComponent from '../../extra/googleMaps/MapComponent';
import key from '../../extra/hiddenFolder/hiddenFile';

const mapSection = ({ coordinates, markers }) => {
    // console.log(key());
    const info = {
        location: {
            lat: coordinates[0],
            lng: coordinates[1]
        },
        markers: []
    };
    return (
        <section className='mapSection'>
            <MapComponent
                info={info}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key()}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />

            <p>
                have getData run after file image loads, something like
                picture.load(function){' '}
            </p>
        </section>
    );
};

export default mapSection;

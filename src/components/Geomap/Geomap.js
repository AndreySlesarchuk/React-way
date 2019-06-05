import React from 'react';
import L from 'leaflet';

class Geomap extends React.Component {
    componentDidMount() {
        this.map = L.map(this.ref['mount']).setView([52.12, 26.09], 7);
    }

    render() {
        return (
            <div ref='mount' />
        )
    }
}

export default Geomap;
import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

class Geomap extends React.Component {
    componentDidMount() {
        this.map = L.map(this.refs['mount']).setView([53.9, 27.5], 7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);
    }

    render() {
        const positionPinsk = [52.12, 26.09];
        const {className, style} = this.props;
        return (

            <div ref='mount' className={className} style={style} />




        )
    }
}

export default Geomap;
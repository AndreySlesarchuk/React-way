import React from 'react';
import L from 'leaflet';

class Geomap extends React.Component {
    componentDidMount() {
        this.map = L.map(this.refs['mount']).setView([52.12, 26.09], 7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);
    }

    render() {
        const {className, style} = this.props;
        return (
            <div>

            <div ref='mount' className={className} style={style}/>

            </div>
        )
    }
}

export default Geomap;
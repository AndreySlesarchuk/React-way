import React from 'react';
import c from './Geomap.module.css';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {marker, tileLayer} from "leaflet/dist/leaflet-src.esm";

const initialTiles = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png';
const initialAttr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const mapCenter = [53.90000, 27.56667];
const zoomLevel = 7;
const positionPinsk = [52.12290, 26.09510];

class Geomap extends React.Component {
    componentDidMount() {
        this.map = L.map(this.refs['mount']).setView(this.props.view || [0,0], 7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);

    }
    render() {
        const positionPinsk = [52.12, 26.09];
        const {className, style} = this.props;
        return (
            <div>

                <div ref='mount' className={className} style={style}/>

            </div>
        )
    }
}

export default Geomap;
import React from 'react';
import c from './Geomap.module.css';
import 'leaflet/dist/leaflet.css'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

const initialTiles = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png';
const initialAttr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const initialName = 'LeafletMap';


const mapCenter = [53.90000, 27.56667];
const zoomLevel = 7;
const positionPinsk = [52.12290, 26.09510];

class Geomap extends React.Component {

    render() {
        return (

                <Map className={c.map} center={mapCenter} zoom={zoomLevel} name={initialName}  >
                    <TileLayer attribution={initialAttr} url={initialTiles} />
                    <Marker position={positionPinsk}>
                        <Popup>
                            <img src='https://my-calend.ru/data/source/pinsk-gerb.png' />

                            A pretty CSS3 popup with Pinsk logo. <br/> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>

        );

    }
}

export default Geomap;
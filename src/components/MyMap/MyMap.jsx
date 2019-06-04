import {Map, Marker, TileLayer} from 'react-leaflet';


const MyMap = () => {
    return (
       <Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/*<MarkerClusterGroup>
        <Marker position={[49.8397, 24.0297]} />
        <Marker position={[52.2297, 21.0122]} />
        <Marker position={[51.5074, -0.0901]} />
    </MarkerClusterGroup>*/}

    </Map>
    )
}
import React from "react";
import {Marker, Popup, TileLayer} from 'react-leaflet'

const MyMap = () => {
    let position = [53.9, 27.5];
    let positionPinsk = [52.12, 26.09];
    debugger;
    return (
        <div>
            <MyMap center={position} zoom={7}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={positionPinsk}>


                    <Popup>
                        <img src='https://my-calend.ru/data/source/pinsk-gerb.png'/>

                        A pretty CSS3 popup with Pinsk logo. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MyMap>
        </div>
    )
}

export default MyMap;
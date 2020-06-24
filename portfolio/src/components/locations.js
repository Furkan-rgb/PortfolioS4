import React, { Component, useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as photosData from "../data/photo-data.json";
import mapStyle from "./mapStyle";


function Map() { //alle photos met een locatie als markering toevoegen
    const [selectedPhoto, setSelectedPhoto] = useState(null);//value van de state, setter daarvoor
    return (
        //Google maps inladen
        <GoogleMap
            defaultZoom={13} //vaste plek bij openen site
            defaultCenter={{ lat: 51.585255, lng: 5.056375 }}
            defaultOptions={{ styles: mapStyle }} //style gebruiken
        >
            {/* Alle properties voor de google map */}
            {photosData.photos.map((photo) => (//alle data van photos nemen en te gebruiken als 'photo' in de functie
                <Marker
                    key={photo.properties.PHOTO_ID}
                    position={{
                        lat: photo.properties.LAT,//lengtegraad (alle photos door .map())
                        lng: photo.properties.LNG//breedtegraad
                    }}
                    onClick={() => {
                        setSelectedPhoto(photo);
                    }}
                    icon={{
                        url: './icons/camera_icon_maps.svg',
                        scaledSize: new window.google.maps.Size(25, 25)
                    }}
                />
            ))}
            {/* infowindow is het venster met info over de locatie */}
            {selectedPhoto && (//als photo geselecteerd is
                <InfoWindow //dan infowindow met de volgende eigenschappen
                    position={{
                        lat: selectedPhoto.properties.LAT,//lengtegraad alle photos
                        lng: selectedPhoto.properties.LNG//breedtegraad
                    }}
                    onCloseClick={() => {
                        setSelectedPhoto(null);//state op null zodat het weer werkt na sluiten infowindow
                    }}
                >
                    <div>
                        <p>{selectedPhoto.properties.TITLE}</p>
                        <img src={selectedPhoto.properties.LINK} alt="locImage" width="100vw" />
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

//load map correctly
const WrappedMap = withScriptjs(withGoogleMap(Map));

class Locations extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100vh' }}>
                <WrappedMap
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAZxjE2tHQO6A8yQwlmhFZVB7PRum7oViM"}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                />
            </div>
        )
    }
}


export default Locations;
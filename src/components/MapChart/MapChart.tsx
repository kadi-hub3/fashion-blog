import React from 'react'
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart: React.FC = () => {
    return (
        <ComposableMap width={900} height={500}>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map(geo => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#DDD"
                            stroke="#FFF"
                        />
                    ))
                }
            </Geographies>
            <Marker coordinates={[-74.006, 40.7128]}>
                <circle r={4} fill="#333" />
            </Marker>
            <Marker coordinates={[4.897070, 52.377956]}>
                <circle r={4} fill="#333" />
            </Marker>
            <Marker coordinates={[-111.093735, 34.048927]}>
                <circle r={4} fill="#333" />
            </Marker>
            <Marker coordinates={[-33.918861, 18.423300]}>
                <circle r={4} fill="#333" />
            </Marker>
            <Marker coordinates={[-23.6052, 15.1201]}>
                <circle r={4} fill="#333" />
            </Marker>
            <Marker coordinates={[-116.173897, 33.680302]}>
                <circle r={4} fill="#333" />
            </Marker>
            <Marker coordinates={[55.296249, 25.276987]}>
                <circle r={4} fill="#333" />
            </Marker>
            <Marker coordinates={[23.8103, 38.2749]}>
                <circle r={4} fill="#333" />
            </Marker>
            <Marker coordinates={[9.1859243, 45.4654219]}>
                <circle r={4} fill="#333" />
            </Marker>
            <Marker coordinates={[-83.753428, 9.748917]}>
                <circle r={4} fill="#333" />
            </Marker>
            <Marker coordinates={[18.06324, 59.334591]}>
                <circle r={4} fill="#333" />
            </Marker>
            <Marker coordinates={[8.2275, 46.8182]}>
                <circle r={4} fill="#333" />
            </Marker>
            <Marker coordinates={[100.523186, 13.736717]}>
                <circle r={4} fill="#333" />
            </Marker>
        </ComposableMap>
    )
}

export default MapChart

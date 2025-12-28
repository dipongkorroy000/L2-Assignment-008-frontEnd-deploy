"use client";

import "ol/ol.css";
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import {useEffect, useRef} from "react";

// Marker এর জন্য দরকারি imports
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import {Icon, Style} from "ol/style";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";

export default function MyMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const marker = new Feature({geometry: new Point([90.4125, 23.8103])});

    marker.setStyle(
      new Style({
        image: new Icon({
          src: "/marker-icon.png",
          anchor: [0.5, 1],
          scale: 1,
        }),
      })
    );

    const vectorSource = new VectorSource({features: [marker]});

    const vectorLayer = new VectorLayer({source: vectorSource});

    // ✅ Map
    const map = new Map({
      target: mapRef.current,
      layers: [new TileLayer({source: new OSM()}), vectorLayer],
      view: new View({
        center: [90.4125, 23.8103],
        zoom: 7,
        projection: "EPSG:4326",
      }),
    });

    return () => map.setTarget(undefined);
  }, []);

  return <div ref={mapRef} className="m-auto h-96 w-full border-2 border-chart-5 shadow-sm" />;
}


import React, { useState, useRef, MouseEvent } from 'react';

import './MapCanvas.css';

export interface City {
    name: string;
    top: number;
    left: number;
    status?: string;
}

interface MapCanvasProps {
    cities: City[];
    imgMapPin: string;
    imgPlus: string;
    imgMinus: string;
}

export const MapCanvas = ({ cities, imgMapPin, imgPlus, imgMinus }: MapCanvasProps) => {
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 0.2, 3));
    };

    const handleZoomOut = () => {
        setZoom(prev => Math.max(prev - 0.2, 0.5));
    };

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const newX = e.clientX - dragStart.current.x;
        const newY = e.clientY - dragStart.current.y;
        setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <main className="map-canvas">
            <div className="map-main-wrapper">
                <div
                    className="map-content"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                        transformOrigin: 'center center',
                        transition: isDragging ? 'none' : 'transform 0.3s ease',
                        width: '100%',
                        height: '100%',
                        cursor: isDragging ? 'grabbing' : 'grab',
                        userSelect: 'none'
                    }}
                >
                    <img src="/Kazakhstan.png" alt="Kazakhstan Map" className="main-map-image" draggable={false} />

                    {cities.map((city, idx) => (
                        <div key={idx} className="map-pin-wrapper" style={{ top: city.top, left: city.left }}>
                            <div className="pin-container">
                                <img src={imgMapPin} alt="pin" className="map-pin" draggable={false} />
                                {city.status && <div className={`status-dot ${city.status}`} />}
                            </div>
                            <span className="city-label">{city.name}</span>
                        </div>
                    ))}
                </div>

                <div className="zoom-controls">
                    <button className="zoom-btn" onClick={handleZoomIn}>
                        <img src={imgPlus} alt="Zoom In" />
                    </button>
                    <button className="zoom-btn" onClick={handleZoomOut}>
                        <img src={imgMinus} alt="Zoom Out" />
                    </button>
                </div>
            </div>
        </main>
    );
};

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
    return (
        <main className="map-canvas">
            <div className="map-main-wrapper">
                <img src="/Kazakhstan.png" alt="Kazakhstan Map" className="main-map-image" />

                {cities.map((city, idx) => (
                    <div key={idx} className="map-pin-wrapper" style={{ top: city.top, left: city.left }}>
                        <div className="pin-container">
                            <img src={imgMapPin} alt="pin" className="map-pin" />
                            {city.status && <div className={`status-dot ${city.status}`} />}
                        </div>
                        <span className="city-label">{city.name}</span>
                    </div>
                ))}

                <div className="zoom-controls">
                    <button className="zoom-btn">
                        <img src={imgPlus} alt="Zoom In" />
                    </button>
                    <button className="zoom-btn">
                        <img src={imgMinus} alt="Zoom Out" />
                    </button>
                </div>
            </div>
        </main>
    );
};

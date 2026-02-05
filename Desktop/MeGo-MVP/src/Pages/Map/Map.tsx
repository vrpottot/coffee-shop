import Filter from '../Homepage/Tours/Filter/Filter'
import './Map.css'
import { TourCard } from './components/TourCard/TourCard'
import { MapCanvas } from './components/MapCanvas/MapCanvas'
import { cities, tours } from './Map.constants'

// Image assets from Figma
const imgMapPin = "/Component 77.svg";
const imgPlus = "/plus.svg";
const imgMinus = "/minus.svg";

function MapPage() {
  return (
    <div className="map-page">
      <div className="map-container">
        {/* Left Sidebar */}
        <aside className="sidebar-filters">
          <Filter showMapButton={false} className="map-sidebar-filter" />
        </aside>

        {/* Center Map */}
        <MapCanvas
          cities={cities}
          imgMapPin={imgMapPin}
          imgPlus={imgPlus}
          imgMinus={imgMinus}
        />

        {/* Right Sidebar */}
        <aside className="tour-cards-sidebar">
          {tours.map((tour, i) => (
            <TourCard key={i} {...tour} />
          ))}
        </aside>
      </div>
    </div>
  )
}

export default MapPage
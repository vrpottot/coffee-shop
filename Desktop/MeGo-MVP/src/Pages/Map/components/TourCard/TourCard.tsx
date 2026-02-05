import iconHeart from '/assets/icon/Избранное.svg'

export interface DifficultyBadgeProps {
    type: "easy" | "middle" | "hard";
    label: string;
}

const DifficultyBadge = ({ type, label }: DifficultyBadgeProps) => (
    <div className={`difficulty-badge ${type}`}>
        <span>{label}</span>
    </div>
);

export interface TourTagProps {
    icon: string;
    label: string;
}

const TourTag = ({ icon, label }: TourTagProps) => (
    <div className="tour-tag">
        <img src={icon} alt="" className="tag-icon" />
        <span className="tag-label">{label}</span>
    </div>
);

export interface TourCardProps {
    title: string;
    difficulty: DifficultyBadgeProps;
    tags: TourTagProps[];
    route: string;
    image: string;
}

export const TourCard = ({ title, difficulty, tags, route, image }: TourCardProps) => (
    <div className="tour-card">
        <div className="card-image-wrapper">
            <img src={image} alt={title} className="card-main-image" />
            <DifficultyBadge {...difficulty} />
            <button className="favorite-btn">
                <img src={iconHeart} alt="Favorite" />
            </button>
        </div>
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <div className="card-tags">
                {tags.map((tag, i) => (
                    <TourTag key={i} {...tag} />
                ))}
            </div>
            <div className="card-route">
                <span className="route-label">Маршут:</span>
                <p className="route-text">{route}</p>
            </div>
        </div>
    </div>
);

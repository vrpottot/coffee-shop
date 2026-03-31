import type { CardsCategoryProps } from "./types";
import { TOUR_TYPE_CONFIG } from "./config";
import { CardsCategoryItem } from "./CardsCategoryItem";
import "./CardsCategory.css"


type Props = {
  meta: CardsCategoryProps;
};

export const CardsCategory = ({ meta }: Props) => {
  return (
    <div className='wrapper'>

      {meta.types.map((type) => {
        const config = TOUR_TYPE_CONFIG[type];

        return (
          <CardsCategoryItem
            key={type}
            icon={config.iconSrc}
            label={config.label}
          />
        );
      })}
    </div>
  );
};

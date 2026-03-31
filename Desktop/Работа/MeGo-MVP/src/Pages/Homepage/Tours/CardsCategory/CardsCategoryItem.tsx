import "./CardsCategory.css";

type Props = {
  icon: string;
  label: string;
};

export const CardsCategoryItem = ({ icon, label }: Props) => {
  return (
    <div className="item">
      <img src={icon} className="icon" />
      <span>{label}</span>
    </div>
  );
};

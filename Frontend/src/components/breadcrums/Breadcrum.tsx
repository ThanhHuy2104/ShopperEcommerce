import "./Breadcrum.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";
const Breadcrum = (props: { category: string, name: string}) => {
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {props.category} <img src={arrow_icon} alt="" /> {props.name}
    </div>
  );
};

export default Breadcrum;

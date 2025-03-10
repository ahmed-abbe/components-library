import { FaReact } from "react-icons/fa";

const Card = ({ children, icon = <FaReact />, iconBgColor = "#61DBFB" }) => {
    return (
        <div className="card">
            <span className="icon" style={{ backgroundColor: iconBgColor }}>
                {icon}
            </span>
            {children}
        </div>
    );
};

export default Card;

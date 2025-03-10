import { useContext } from "react";
import { BannerContext } from "./Banner";

const Title = ({ children }) => {
    const icon = useContext(BannerContext);

    return (
        <h3>
            {icon}
            {children}
        </h3>
    );
};

export default Title;

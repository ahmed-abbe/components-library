import { useContext } from "react";
import { PopupContext } from "./Popup";

const Title = ({children}) => {
    const icon = useContext(PopupContext);
    return <h3>{icon} {children}</h3>;
};

export default Title;

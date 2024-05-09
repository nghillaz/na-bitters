import { classList } from "./_utils";
import { CloseButton } from "./button";
import "./popup.css";

export function Popup(props: { visible: boolean, onClose: Function }) {
    return <div
        onClick={event => event.stopPropagation()}
        className={classList([
            "popup",
            props.visible ? "visible" : ""
        ])}>
        <CloseButton onClick={props.onClose} />
    </div>
}
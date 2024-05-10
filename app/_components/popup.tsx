import { useEffect } from "react";
import { classList } from "./_common";
import { CloseButton } from "./button";
import "./popup.css";

export function Popup(props: {
  visible: boolean;
  onClose: Function;
  content: JSX.Element;
}) {
  return (
    <div
      className={classList(["popupContainer", props.visible ? "visible" : ""])}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="popup">
        <div className="popupContent">
        <CloseButton onClick={props.onClose} />
        {props.content}
        </div>
      </div>
    </div>
  );
}

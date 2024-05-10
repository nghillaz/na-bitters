import { useEffect } from "react";
import { classList } from "./_common";
import { CloseButton } from "./button";
import "./popup.css";

export function Popup(props: {
  visible: boolean;
  onClose: Function;
  setPopupEnabled: Function;
}) {
  useEffect(() => {
    props.setPopupEnabled(true);
  }, []);

  return (
    <div
      className={classList(["popupContainer", props.visible ? "visible" : ""])}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="popup">
        <CloseButton
          onClick={() => {
            props.onClose();
            props.setPopupEnabled(false);
          }}
        />
      </div>
    </div>
  );
}

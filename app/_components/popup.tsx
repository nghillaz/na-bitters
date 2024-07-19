import { useEffect, useRef } from "react";
import { classList } from "./_common";
import { IconButton } from "./button";
import images from "../images/_index";
import "./popup.scss";

export function Popup(props: {
  visible: boolean;
  onClose: Function;
  content: JSX.Element;
}) {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const escapeListener: EventListener = (event: Event) => {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent?.key === "Escape") {
        props.onClose();
      }
    };

    window.addEventListener("keydown", escapeListener);

    return () => {
      window.removeEventListener("keydown", escapeListener);
    };
  }, [props]);

  return (
    <div
      ref={containerRef}
      className={classList(["popupContainer", props.visible ? "visible" : ""])}
      onClick={(event) => {
        if (event.target === containerRef.current) {
          props.onClose();
        }
        event.stopPropagation();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          props.onClose();
        }
      }}
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

function CloseButton(props: { onClick: Function }) {
  return (
    <IconButton
      pic={images.close}
      onSelect={props.onClick}
      className="closeButton"
      isSelected={false}
      width={35}
      height={35}
    />
  );
}

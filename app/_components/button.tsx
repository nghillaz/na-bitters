import Image, { StaticImageData } from "next/image";
import { classList } from "./_common";
import {
  KeyboardEventHandler,
  MouseEventHandler,
  useRef,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from "react";
import "./button.css";

export interface IButtonProps {
  content: JSX.Element;
  onSelect: Function;
  isSelected: boolean;
  disabled?: boolean;
  className?: string;
}

export function Button(props: IButtonProps) {
  const buttonEl = useRef<HTMLDivElement>(null);

  const onPress: KeyboardEventHandler & MouseEventHandler = (
    event: ReactKeyboardEvent & ReactMouseEvent
  ) => {
    if (!buttonEl.current) {
      return;
    }

    if (event.key !== undefined) {
      switch (event.key) {
        case "Enter":
        case "Spacebar":
        case " ":
          buttonEl.current.classList.add("clicked");
          break;
      }
    }

    if (event.button !== undefined) {
      console.log("button: " + event.button);
      if (event.button === 0) {
        buttonEl.current.classList.add("clicked");
      }
    }
  };

  const onRelease: KeyboardEventHandler & MouseEventHandler = (
    event: ReactKeyboardEvent & ReactMouseEvent
  ) => {
    if (!buttonEl.current) {
      return;
    }
    if (event.key !== undefined) {
      switch (event.key) {
        case "Enter":
        case "Spacebar":
        case " ":
          buttonEl.current.classList.remove("clicked");
          props.onSelect();
          break;
      }
    }

    if (event.button !== undefined) {
      if (event.button === 0) {
        buttonEl.current.classList.remove("clicked");
      }
    }
  };

  return (
    <div
      tabIndex={0}
      ref={buttonEl}
      className={classList([
        "button clickable highlightable",
        props.isSelected ? "highlighted" : "",
        props.disabled ? "disabled" : "",
        props.className ?? "",
      ])}
      onKeyDown={onPress}
      onKeyUp={onRelease}
      onMouseDown={onPress}
      onMouseUp={onRelease}
      onMouseLeave={onRelease}
      onClick={
        props.disabled
          ? undefined
          : (event) => {
              props.onSelect();
              event.stopPropagation();
            }
      }
    >
      {props.content}
    </div>
  );
}

export function IconButton(
  props: Omit<IButtonProps, "content"> & {
    pic: StaticImageData;
    caption?: string;
    className?: string;
  }
) {
  return (
    <Button
      className={classList(["iconButton", props.className ?? ""])}
      content={
        <div className="centeredFlexColumn">
          <Image src={props.pic} width={55} height={55} alt="" />
          <div className="caption">{props.caption}</div>
        </div>
      }
      onSelect={props.onSelect}
      isSelected={props.isSelected}
    />
  );
}

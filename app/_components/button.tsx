import Image, { StaticImageData } from "next/image";
import images from "../images/_index";
import "./button.css";
import { classList } from "./_common";
import { KeyboardEventHandler, MouseEventHandler, useCallback, useRef, KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from "react";

export function Button(props: {
    image: StaticImageData;
    onSelect: Function,
    caption?: string,
    isSelected?: boolean,
    className?: string,
    disabled?: boolean
}
) {
    const buttonEl = useRef<HTMLDivElement>(null);

    const onPress: KeyboardEventHandler & MouseEventHandler = useCallback((event: ReactKeyboardEvent & ReactMouseEvent) => {
        if (!buttonEl.current) { return; }

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
    }, []);

    const onRelease: KeyboardEventHandler & MouseEventHandler = useCallback((event: ReactKeyboardEvent & ReactMouseEvent) => {
        if (!buttonEl.current) { return; }
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
    }, []);

    return (
        <div tabIndex={0} ref={buttonEl}
            className={classList([
                "button clickable highlightable",
                props.isSelected ? "selected" : "",
                props.disabled ? "disabled" : "",
                props.className ?? "",
            ])}
            onKeyDown={onPress}
            onKeyUp={onRelease}
            onMouseDown={onPress}
            onMouseUp={onRelease}
            onMouseLeave={onRelease}
            onClick={props.disabled ? undefined : event => { props.onSelect(); event.stopPropagation(); }}
        >
            <div className="buttonIcon">
                <Image src={props.image} width={55} height={55} alt="" />
                {props.caption ? <div className="caption">{props.caption}</div> : null}
            </div>
        </div>
    );
}

export function CloseButton(props: { onClick: Function }) {
    return <Button image={images.close} onSelect={props.onClick} className="closeButton" />
}
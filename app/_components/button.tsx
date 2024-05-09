import Image, { StaticImageData } from "next/image";
import images from "../images/_index";
import "./button.css";
import { classList } from "../page";

export function Button(props: {
    image: StaticImageData;
    onSelect: Function,
    caption?: string,
    isSelected?: boolean,
    className?: string,
    disabled?: boolean
}
) {
    return (
        <div
            className={classList([
                "button clickable highlightable",
                props.isSelected ? "selected" : "",
                props.disabled ? "disabled" : "",
                props.className ?? "",
            ])}
            onClick={props.disabled ? undefined : event => { props.onSelect(); event.stopPropagation(); }}
        >
            <div className="buttonIcon">
                <Image src={props.image} width={75} height={75} alt="" />
                {props.caption ? <div className="caption">{props.caption}</div> : null}
            </div>
        </div>
    );
}

export function CloseButton(props: { onClick: Function }) {
    return <Button image={images.close} onSelect={props.onClick} className="closeButton" />
}
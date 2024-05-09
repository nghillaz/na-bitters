import { useState } from "react";
import Image from "next/image";
import images from "../images/_index";
import { classList } from "./_utils";
import "./filter.css";

export function Filter(props: { prompt: string, options: IFilterOption[], disabled?: boolean }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selections, setSelections] = useState<IFilterOption[]>([]);
    const hasSelections = !!selections?.length;

    return <div
        onClick={props.disabled ? undefined : () => setIsExpanded(isExpanded => !isExpanded)}
        className={classList([
            "filter",
            isExpanded ? "highlightable selected" : "",
            props.disabled ? "" : "clickable",
        ])}
    >
        <div className={classList([
            "filterIcon",
            hasSelections && !props.disabled ? "highlightable selected" : "",
        ])}
        >
            <Image src={images.filter} width={20} height={20} alt="" />
        </div>
        <div>{props.prompt}</div>
        <div className={classList([
            "dropdown"
        ])}>
            {props.options.map(o => <div key={o.key}>{o.name}</div>)}
        </div>
    </div>;
}

export interface IFilterOption {
    name: string;
    key: any;
}
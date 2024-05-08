import { useState } from "react";
import filterPic from "../images/filter.svg";
import Image from "next/image";
import "./filter.css";

export function Filter(props: { prompt: string, options: IFilterOption[] }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selections, setSelections] = useState<IFilterOption[]>([]);
    const hasSelections = !!selections?.length;

    return <div
        onClick={() => setIsExpanded(isExpanded => !isExpanded)}
        className={[
            "filter clickable",
            isExpanded ? "highlightable selected" : "",
        ].join(" ")}
    >
        <div className={[
            "filterIcon",
            hasSelections ? "highlightable selected" : ""
        ].join(" ")}
        >
            <Image src={filterPic} width={20} height={20} alt="" />
        </div>
        <div>{props.prompt}</div>
        <div>
            {props.options.map(o => <div key={o.key}>{o.name}</div>)}
        </div>
    </div>;
}

export interface IFilterOption {
    name: string;
    key: any;
}
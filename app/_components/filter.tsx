import { KeyboardEventHandler, MouseEventHandler, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import images from "../images/_index";
import { classList } from "./_common";
import "./filter.css";
import { Button } from "./button";

export function Filter(props: { prompt: string, options: IFilterOption[], disabled?: boolean, selections: number[], setSelections: Function }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const dropdownEl = useRef<HTMLDivElement>(null);
    const filterEl = useRef<HTMLDivElement>(null);

    const toggleOption = (option: IFilterOption) => {
        const newSelections: number[] = props.selections.slice();
        const existingIndex = newSelections.indexOf(option.key);
        if (existingIndex !== -1) {
            newSelections.splice(existingIndex, 1);
        }
        else {
            newSelections.push(option.key);
        }
        props.setSelections(newSelections);
    }

    if (filterEl.current && dropdownEl.current) {
        if (isExpanded) {
            const filterWidth = filterEl.current.clientWidth;
            const dropdownWidth = dropdownEl.current.clientWidth;
            const isDropdownBigger = dropdownWidth > filterWidth;
            const calcWidth = Math.max(filterWidth, dropdownWidth);
            if (isDropdownBigger) {
                filterEl.current.style.width = calcWidth + "px";
            }
            else {
                dropdownEl.current.style.width = calcWidth + "px";
            }
        }
        else {
            filterEl.current.style.width = "unset";
            dropdownEl.current.style.width = "unset";
        }
    }

    return <div
        tabIndex={0}
        onMouseOver={props.disabled ? undefined : () => setIsExpanded(true)}
        onMouseOut={() => setIsExpanded(false)}
        className={classList([
            "filter",
            isExpanded ? "expanded" : "",
        ])}
        ref={filterEl}
    >
        <div className={classList([
            "filterIcon",
            "highlightable",
            props.selections.length && !props.disabled && !isExpanded ? "highlighted" : "",
        ])}
        >
            <Image src={images.filter} width={18} height={18} alt="" />
        </div>
        <div>{props.prompt}</div>
        <div className="paddingRight" />
        <div
            ref={dropdownEl}
            className={classList([
                "dropdown",
                isExpanded ? "visible" : ""
            ])}>
            {props.options.map(o => <DropdownOption option={o} key={o.key} onSelect={() => toggleOption(o)} selected={props.selections.indexOf(o.key) !== -1} />)}
        </div>
    </div>;
}

function DropdownOption(props: { option: IFilterOption, onSelect: MouseEventHandler & KeyboardEventHandler, selected: boolean }) {
    return <Button onSelect={props.onSelect} caption={props.option.name} isSelected={props.selected} className="dropdownOption" />
}

export interface IFilterOption {
    name: string;
    key: number;
}